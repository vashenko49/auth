import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ParsedUrlQueryInput } from 'node:querystring';
import process from 'process';
import url from 'url';

import { RedirectDto } from './dto';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('redirect')
  getRedirectUrl(): RedirectDto {
    return this.oauthService.generateRedirectUrl();
  }

  @Get('redirect/finish1')
  async finishRedirect(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    const params = url.format({
      query: request.query as ParsedUrlQueryInput,
    });

    response.redirect(`${process.env.API_FINISH_REDIRECT}${params}`);
  }
}
