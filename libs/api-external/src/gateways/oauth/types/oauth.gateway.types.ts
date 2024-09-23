import { IOauth } from '@vashenko49/auth-core';

export namespace IOauthGateway {
  export namespace CreateRedirectUrl {
    export type Body = {
      state: string;
    };

    export type Response = IOauth.Redirect;

    export type Return = Promise<Response>;
  }
}
