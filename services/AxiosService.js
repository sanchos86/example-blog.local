export default class AxiosService {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  get(url, params = {}, extraConfig = {}) {
    const defaultConfig = { params };
    const config = Object.assign(extraConfig, defaultConfig);
    return this.axiosInstance.get(url, config);
  }
}
