import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import Home from 'pages/index';
import { InitialState } from 'store/store';
import { PhotosResponse } from 'mocks/metadata';
import { UnsplashService } from 'services';
import { act, fireEvent, waitFor } from '@testing-library/react';

describe('<Index />', () => {
  test('should be render empty swipper and show firs image', async () => {
    const spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce(PhotosResponse);

    const { container, getByTestId } = render(<Home />, {
      initialState: InitialState,
    });

    const photo = getByTestId(container, `photo-${PhotosResponse[0].id}`);
    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');

    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();

    await waitFor(() => expect(getAllByTestId('photo')).toHaveLength(0));

    expect(spyUnsplashService).toBeCalledTimes(1);
    spyUnsplashService.mockRestore();
  });

  test('should be render an element in swipper and show firs image', async () => {
    const spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce(PhotosResponse);

    const { container, getByTestId } = render(<Home />, {
      initialState: InitialState,
    });

    const photo = getByTestId(container, `photo-${PhotosResponse[0].id}`);
    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');

    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();

    fireEvent.click(approve);

    await waitFor(() => expect(getAllByTestId('photo')).toHaveLength(1));
    expect(spyUnsplashService).toBeCalledTimes(1);
    spyUnsplashService.mockRestore();
  });

  test('should be do not show the rejected image and not show a new one', () => {
    let spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce(PhotosResponse);

    const { container, getByTestId } = render(<Home />, {
      initialState: {
        metadata: {
          ...InitialState,
          rejected: [PhotosResponse[0]],
        },
      },
    });

    spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce([PhotosResponse[1]]);

    const photo = getByTestId(container, `photo-${PhotosResponse[1].id}`);
    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');

    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();
    expect(spyUnsplashService).toBeCalledTimes(2);
    spyUnsplashService.mockRestore();
  });

  test('should be remove the approve image when selected reject', async () => {
    let spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce(PhotosResponse);

    const { container, getByTestId } = render(<Home />, {
      initialState: {
        metadata: {
          ...InitialState,
          approved: [PhotosResponse[0], PhotosResponse[1]],
          rejected: [],
        },
      },
    });

    spyUnsplashService = jest
      .spyOn(UnsplashService, 'getRandomImage')
      .mockResolvedValueOnce([PhotosResponse[2]]);

    const reject = getByTestId(container, 'button-reject');
    const approve = getByTestId(container, 'button-approve');
    fireEvent.click(reject);

    const photo = getByTestId(container, `photo-${PhotosResponse[2].id}`);
    await waitFor(() => expect(getAllByTestId('photo')).toHaveLength(1));

    expect(photo).toBeInTheDocument();
    expect(approve).toBeInTheDocument();
    expect(reject).toBeInTheDocument();
    expect(spyUnsplashService).toBeCalledTimes(2);
    spyUnsplashService.mockRestore();
  });
});
