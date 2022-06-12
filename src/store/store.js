import _ from 'underscore';
import packageInfo from './../../package.json';
import { enviroment } from 'configs';
import { isServer } from 'utils';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { createSelectorHook } from 'react-redux';

import { metadataReducer, metadataInitialState } from './metadata';

const version = packageInfo.version;
const combinedReducer = combineReducers({
  metadata: metadataReducer,
});

export const PERSIST_KEY = 'photo-review';
export const useSelector = createSelectorHook();
export const RESET_STORE = 'RESET_STORE';

export const InitialState = {
  metadata: metadataInitialState,
};

export const reducer = (state = InitialState, action) => {
  if (action.type === HYDRATE) {
    let metadata = state.metadata;
    if (
      _.isUndefined(metadata) ||
      _.isNull(state.metadata) ||
      _.isEmpty(metadata)
    ) {
      metadata = action.payload.metadata;
    }

    // Persists on hydrate
    const nextState = {
      ...state,
      ...action.payload,
      metadata: metadata,
    };

    return nextState;
  }

  if (action.type === RESET_STORE) {
    // use metadata prev loaded
    return { ...InitialState };
  }
  return combinedReducer(state, action);
};

const bindMiddleware = middleware => {
  if (enviroment === 'local') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { logger } = require('redux-logger');
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export let store = null;
const makeConfiguredStore = r =>
  createStore(r, InitialState, bindMiddleware([thunkMiddleware]));

export const makeStore = context => {
  store = makeConfiguredStore(reducer);
  store.subscribe(() => {
    if (!isServer()) {
      localStorage.setItem(
        PERSIST_KEY,
        JSON.stringify({ ...store.getState(), persistVersion: version })
      );
    }
  });
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {
  debug: enviroment === 'local',
  storeKey: PERSIST_KEY,
});
