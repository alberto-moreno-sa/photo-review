/**
 * Custom hook to get images
 */
import { useEffect, useState } from 'react';
import { UnsplashService } from 'services';
import { useSelector } from 'store/store';

const reintent = 0;
const MAX_RETRIES = 3;
const useImages = () => {
  const [error, setError] = useState(null);
  const rejectedList = useSelector(state => state.metadata.rejected);

  const getRadom = async count => {
    try {
      const result = await UnsplashService.getRandomImage(count);

      if (rejectedList.find(image => image.id === result.id)) {
        if (reintent <= MAX_RETRIES) {
          return await UnsplashService.getRandomImage();
        }

        return null;
      }

      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return { getRadom };
};

export default useImages;
