import axios from 'axios';

// export default () => {
//   return axios.create({
//     // baseURL: 'https://some-domain.com/api/',
//     // timeout: 1000,
//     // withCredentials: true,
//     baseURL: 'http://localhost:8081',
//     // baseURL: 'http://127.0.0.1:8081'
//   })
// }

export default class Api {
  constructor(options = {}) {
    this.client = axios.create({
      baseURL: 'http://localhost:8081'
    });
    this.token = options.token;
    this.refreshToken = options.refreshToken;

    this.client.interceptors.request.use(config => {
      if(!this.token) {
        return config;
      }

      const newConfig = {
        headers: {},
        ...config
      }

      newConfig.headers.Authorization = `Bearer ${this.token}`;

      return newConfig;
    }, e => Promise.reject(e))
  }

  axiosCreate() {
    return axios.create({
      baseURL: 'http://localhost:8081'
    })
  }

  async login(login, password) {
    const { data } = await this.client.post('/auth/login', {login, password});
    console.log('data', data)

    this.token = data.accessToken;
    this.refreshToken = data.refreshToken;

    return data;
  }

  logout() {
    this.token = null;
    this.refreshToken = null;
  }
}