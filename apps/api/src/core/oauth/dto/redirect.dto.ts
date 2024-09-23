import { IOauthGateway } from '@vashenko49/auth-api-external';

export class RedirectDto implements IOauthGateway.CreateRedirectUrl.Response {
  redirectUrl: string;
}
