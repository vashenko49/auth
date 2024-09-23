import { CreateAxiosDefaults } from 'axios';

export namespace IGoogleOauthRepository {
  export type Options = {
    config: CreateAxiosDefaults;
    onRejected?: (error: any) => any;
  };
}
