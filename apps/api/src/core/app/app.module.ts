import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { validationSchema } from '../../config';
import { OauthModule } from '../oauth/oauth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      isGlobal: true,
    }),

    OauthModule,
  ],
  controllers: [AppController],
  providers: [JwtModule],
})
export class AppModule {}
