import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com";

export class HttpClientService {
  // You may want to configure interceptors here for Authorization: "Bearer ..."
  axiosInstance = axios.create({ baseURL: BASE_URL });

  async get(path, request) {
    return this.axiosInstance
      .get(path, { params: request })
      .then((r) => r.data);
  }

  async post(path, request) {
    return this.axiosInstance.post(path, request).then((r) => r.data);
  }

  async delete(path){
    return this.axiosInstance.delete(path).then((r) => r.data);
  }

  //... other HTTP methods
}