import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import Home from 'pages/index';
import { InitialState } from 'store/store';
import { PhotosResponse } from 'mocks/metadata';

describe('<Index />', () => {
  test('renders and shows header and footer', () => {
    const { container, getByTestId } = render(<Home />, {
      initialState: InitialState,
    });

    const photo = getByTestId(container, `photo-${PhotosResponse[0].id}`);
    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');
    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();
  });
});
