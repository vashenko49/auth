import { IOauthGateway } from '@vashenko49/auth-api-external';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetRedirectUrlDto implements IOauthGateway.CreateRedirectUrl.Body {
  @IsString()
  @IsNotEmpty()
  state: string;
}
