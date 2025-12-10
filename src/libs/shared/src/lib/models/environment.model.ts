export interface Environment {
  production: boolean;
  envcode: 'local' | 'dev' | 'stg' | 'prod';
}
