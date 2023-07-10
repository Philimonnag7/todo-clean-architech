export default class AuthenticateUser {
  constructor(authApiClient) {
    this.authApiClient = authApiClient;
  }

  execute(username, password) {
    return this.authApiClient.login(username, password);
  }
}
