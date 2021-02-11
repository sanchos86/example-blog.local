import { Container } from 'typedi';

import api from '~/api/api';
import serviceNames from '~/constants/serviceNames';

import ApiService from '~/services/ApiService';
import AxiosService from '~/services/AxiosService';
import TagsService from '~/services/TagsService';
import PostsService from '~/services/PostsService';
import CategoriesService from '~/services/CategoriesService';

export default ({ $axios, store }, inject) => {
  Container.set(serviceNames.AXIOS_SERVICE, new AxiosService($axios, Container));
  Container.set(serviceNames.API_SERVICE, new ApiService(api, Container));
  Container.set(serviceNames.POSTS_SERVICE, new PostsService(store, Container));
  Container.set(serviceNames.TAGS_SERVICE, new TagsService(store, Container));
  Container.set(serviceNames.CATEGORIES_SERVICE, new CategoriesService(store, Container));
  inject('Container', Container);
};
