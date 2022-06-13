import {
  AxiosStatic,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import camelCase from 'camelcase-keys';

export class Requestor {
  static client = null;

  static async getRequestBody(req, options) {
    const response = await this.getRequest(req, options);
    return response.data;
  }

  static async initClient() {
    this.client = (await import('axios')).default;
    this.client.interceptors.response.use(
      response => {
        response.data = camelCase(response.data, { deep: true });
        return response;
      },
      error => {
        if (error?.response?.data !== null) {
          error.response.data = camelCase(error.response.data, { deep: true });
        }
        throw error.response;
      }
    );
  }

  static async getRequest(req, options) {
    const isServer = typeof window === 'undefined';
    const start = new Date().getTime();
    const messageInfo = '[Requestor:getRequest]';
    const newOptions = {
      disableLogger: Boolean(options) && options.disableLogger,
    };

    let Logger = null;
    const enableLogs = !newOptions.disableLogger && isServer;
    if (enableLogs) {
      Logger = (await import('utils/Logger')).Logger;
      Logger.info('%s performing request: %j', messageInfo, req);
    }

    try {
      if (this.client === null) {
        await this.initClient();
      }

      const response = await this.client.request(req);
      if (enableLogs && Logger !== null) {
        Logger.info('%s response: %j', messageInfo, response.data);
      }

      return response;
    } catch (error) {
      if (!newOptions.disableLogger && Logger !== null) {
        Logger.info('%s error: %j', messageInfo, error);
      }
      throw error;
    } finally {
      if (enableLogs && Logger !== null) {
        const end = new Date().getTime() - start;
        Logger.info('%s Processed request in: %sms', messageInfo, end);
      }
    }
  }
}
