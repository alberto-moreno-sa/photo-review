import { actionTypes } from './actions';

export const metadataInitialState = {
  current: {},
  visited: [],
};

export function metadataReducer(state = metadataInitialState, action) {
  switch (action.type) {
    case actionTypes.SET_METADATA:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
