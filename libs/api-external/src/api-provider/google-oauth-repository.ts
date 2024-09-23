import axiosBase, { AxiosInstance, AxiosResponse } from 'axios';

import { OauthGateway } from '../gateways';
import { IGoogleOauthRepository } from './types';

export class GoogleOauthRepository {
  private readonly _axios: AxiosInstance;

  private readonly _axiosInterceptors: AxiosInstance;

  private readonly _oauth: OauthGateway;

  constructor({ config, onRejected }: IGoogleOauthRepository.Options) {
    this._axios = axiosBase.create(config);

    this._axiosInterceptors = axiosBase.create(config);

    this._axiosInterceptors.interceptors.response.use(
      (value: AxiosResponse) => value,
      onRejected,
    );

    this._oauth = new OauthGateway(this._axiosInterceptors);
  }

  get oauth(): OauthGateway {
    return this._oauth;
  }
}
