import { Requestor } from 'services';
import { unsplash } from 'configs';
import _ from 'underscore';

const PHOTOS_PATH_PREFIX = '/photos';

export class UnsplashService {
  static async getRandomImage(count) {
    try {
      const result = await Requestor.getRequestBody({
        method: 'GET',
        params: {
          content_filter: 'high',
          count: count ? count : 1,
        },
        url: `${unsplash.apiUrl}/photos/random`,
        headers: {
          'Accept-Version': unsplash.apiVersion,
          Authorization: `Client-ID ${unsplash.accessKey}`,
        },
      });

      if (_.isUndefined(result) || _.isNull(result) || _.isEmpty(result)) {
        throw new Error(JSON.stringify(result.error));
      }

      return result;
    } catch (error) {
      const msgError = 'An error has happened in try to retrievePaymentIntent';
      throw new Error(error);
    }
  }

  static async getRandomImage2(count) {
    try {
      const result = await Requestor.getRequestBody({
        method: 'GET',
        url: 'https://api.pexels.com/v1/photos/',
      });

      debugger;
      const ss = JSON.parse(result);
      console.log(ss);
      /*       if (_.isUndefined(result) || _.isNull(result) || _.isEmpty(result)) {
        throw new Error(JSON.stringify(result.error));
      } */

      return result.photo;
    } catch (error) {
      const msgError = 'An error has happened in try to retrievePaymentIntent';
      throw new Error(error);
    }
  }
}
