import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import { GalleryImage } from 'components/galleryImage';
import { metadata } from 'mocks/metadata';

describe('<Review />', () => {
  test('renders and shows header and footer', () => {
    const { container } = render(<GalleryImage list={metadata.approved} />);
    const galleryImage = getByTestId(container, `gallery-image`);
    const typography = getByTestId(container, 'gallery-image-typography');
    const galleryImageSlider = getByTestId(container, 'gallery-image-slider');
    expect(galleryImage).toBeInTheDocument();
    expect(typography).toBeInTheDocument();
    expect(galleryImageSlider).toBeInTheDocument();
  });
});
