import api from '~/api/api';

import ApiService from '~/services/ApiService';
import AxiosService from '~/services/AxiosService';
import TagsService from '~/services/TagsService';
import PostsService from '~/services/PostsService';
import CategoriesService from '~/services/CategoriesService';

export default ({ $axios, store }, inject) => {
  const httpService = new AxiosService($axios);
  const apiService = new ApiService(httpService, api);
  inject('postsService', new PostsService(apiService, store));
  inject('tagsService', new TagsService(apiService, store));
  inject('categoriesService', new CategoriesService(apiService, store));
};
