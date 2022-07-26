
import axios from 'axios';
import APIError from '../../errors/APIError';

export class HttpClient {
  constructor(
    private baseURL: string,
  ) {
    this.createAxios();
  }

  createAxios() {
    return axios.create({
      baseURL: this.baseURL,
    });
  }

  async get(path: string, params: any) {
    const api = this.createAxios();

    const response = await api.get(path, params);

    if (response.data) 
      return response.data;

    throw new APIError(response);
  }
}