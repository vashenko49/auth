import * as Joi from 'joi';

/**
 * Application's required environment schema
 */
export const validationSchema = Joi.object({
  SERVICE: Joi.string().default('auth-api'),
  CORS_URLS: Joi.string().optional(),
  /*
   * Google
   * */
  MAILBOXES_GOOGLE_CLIENT_ID: Joi.string().required(),
  MAILBOXES_GOOGLE_CLIENT_SECRET: Joi.string().required(),
  MAILBOXES_GOOGLE_REDIRECT_URL: Joi.string().required(),
  /*
   * API
   * */
  API_FINISH_REDIRECT: Joi.string().required(),
});
