export default class APIError extends Error {
  constructor(
    private response: any,
  ) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.message = response.message;
  }
}