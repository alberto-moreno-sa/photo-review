import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'store/store';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable */
function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
