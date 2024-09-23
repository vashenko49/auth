declare type ProcessEnvFields =
  | 'NODE_ENV'
  | 'PORT'
  | 'CORS_URLS'
  | 'API_FINISH_REDIRECT'
  | 'SERVICE'
  | 'MAILBOXES_GOOGLE_CLIENT_ID'
  | 'MAILBOXES_GOOGLE_CLIENT_SECRET'
  | 'MAILBOXES_GOOGLE_REDIRECT_URL';

declare namespace NodeJS {
  export type ProcessEnv = Record<ProcessEnvFields, string>;
}
