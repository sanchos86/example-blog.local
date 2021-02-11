export default class AxiosService {
  constructor(axiosInstance) {
    this.$axiosInstance = axiosInstance;
  }

  get(url, params = {}, axiosConfig = {}) {
    let config = {
      params
    };
    config = Object.assign(axiosConfig, config);
    return this.$axiosInstance.get(url, config);
  }
}
