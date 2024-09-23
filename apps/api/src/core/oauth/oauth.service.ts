import { Injectable } from '@nestjs/common';

import { IOauthService } from './type';

@Injectable()
export class OauthService {
  public generateRedirectUrl(): IOauthService.GenerateRedirectUrl.Return {
    return {
      redirectUrl: 'test',
    };
  }
}
