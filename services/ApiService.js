import serviceNames from '~/constants/serviceNames';

export default class ApiService {
  constructor(api, container) {
    this.container = container;
    this.api = api;
    this.init();
  }

  init() {
    Object.entries(this.api).forEach(([key, value]) => {
      this[key] = value(this.container.get(serviceNames.AXIOS_SERVICE));
    });
  }
}
