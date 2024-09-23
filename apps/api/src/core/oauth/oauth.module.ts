import { Module } from '@nestjs/common';

import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';

@Module({
  controllers: [OauthController],
  imports: [],
  providers: [OauthService],
})
export class OauthModule {}
