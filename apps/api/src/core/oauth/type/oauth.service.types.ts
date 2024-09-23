export namespace IOauthService {
  export namespace GenerateRedirectUrl {
    export type Parameters = {
      state: string;
    };

    export type Return = {
      redirectUrl: string;
    };
  }
}
