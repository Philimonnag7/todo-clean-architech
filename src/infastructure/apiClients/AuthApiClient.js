export default class AuthApiClient {
  login(username, password) {
    // Simulate API call and return an auth token
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("mockAuthToken");
      }, 1000);
    });
  }
}
