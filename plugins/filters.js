import Vue from 'vue';

export const formDate = (value) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return value ? new Intl.DateTimeFormat('ru-RU', options).format(new Date(value)) : '';
};

export const cropText = (value, length = 100) => {
  if (typeof value === 'string') {
    return value.length > length ? `${value.slice(0, length)}...` : value;
  }
  return value;
};

export const capitalize = (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
};

Vue.filter('formatDate', formDate);

Vue.filter('cropText', cropText);

Vue.filter('capitalize', capitalize);
