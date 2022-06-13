import React from 'react';
import { render } from 'testUtils';
import Index from 'pages/index';
import { InitialState } from 'store/store';

it('renders homepage unchanged', () => {
  const { container } = render(<Index />, {
    initialState: InitialState,
  });

  expect(container).toMatchSnapshot();
});
