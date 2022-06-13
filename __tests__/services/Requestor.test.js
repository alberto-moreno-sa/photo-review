import { Requestor } from 'services';
import axios, { AxiosRequestConfig } from 'axios';

describe('Requestor', () => {
  describe('getRequest', () => {
    it('should request using axios and return its response', async () => {
      const request = {
        method: 'get',
        url: 'http;//localhost',
      };

      const expectedResponse = {
        data: { success: true },
      };

      axios.request = jest.fn().mockResolvedValueOnce(expectedResponse);
      const response = await Requestor.getRequest(request);
      expect(axios.request).toBeCalledTimes(1);
      expect(response.data.success).toBe(expectedResponse.data.success);
    });

    it('should throw an error if anything goes wrong requesting with axios and returns request error', async () => {
      const request = {
        method: 'get',
        url: 'http;//localhost',
      };

      const expectedResponse = {
        data: { success: false },
      };

      axios.request = jest.fn().mockRejectedValueOnce(expectedResponse);

      try {
        await Requestor.getRequest(request);
      } catch (error) {
        expect(axios.request).toBeCalledTimes(1);
        expect(error.data.success).toBe(expectedResponse.data.success);
      }
    });
  });

  describe('interceptors', () => {
    it('fulfilled response body keys in camelCase', () => {
      const interceptor = axios.interceptors.response;
      expect(
        interceptor.handlers[0].fulfilled({ data: { data_a: 'foo' } })
      ).toMatchObject({
        data: {
          dataA: 'foo',
        },
      });
    });

    it('rejected response body keys in camelCase', async () => {
      const interceptor = axios.interceptors.response;

      try {
        const error = { response: { data: { data_a: 'foo' } } };
        await interceptor.handlers[0].rejected(error);
      } catch (error) {
        expect(error).toMatchObject({
          data: {
            dataA: 'foo',
          },
        });
      }
    });
  });
});
