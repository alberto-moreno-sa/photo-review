import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import Review from 'components/review';
import { InitialState } from 'store/store';
import { PhotosResponse } from 'mocks/metadata';

describe('<Review />', () => {
  test('renders and shows header and footer', () => {
    const { container } = render(
      <Review photo={PhotosResponse[0]} onClick={() => null} />
    );
    const photo = getByTestId(container, `photo-${PhotosResponse[0].id}`);
    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');
    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();
  });
});
