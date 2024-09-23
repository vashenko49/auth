import { AxiosInstance } from 'axios';

import { IOauthGateway } from './types';

export class OauthGateway {
  private readonly _axiosInterceptors: AxiosInstance;

  constructor(axiosInterceptors: AxiosInstance) {
    this._axiosInterceptors = axiosInterceptors;
  }

  async createRedirectUrl(
    body: IOauthGateway.CreateRedirectUrl.Body,
  ): IOauthGateway.CreateRedirectUrl.Return {
    const { data } =
      await this._axiosInterceptors.post<IOauthGateway.CreateRedirectUrl.Response>(
        'oauth/redirect',
        body,
      );

    return data;
  }
}
