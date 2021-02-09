import Vue from 'vue';

Vue.filter('formatDate', (value) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return value ? new Intl.DateTimeFormat('ru-RU', options).format(new Date(value)) : '';
});

Vue.filter('cropText', (value, length = 100) => {
  if (typeof value === 'string') {
    return value.length > length ? `${value.slice(0, length)}...` : value;
  }
  return value;
});
