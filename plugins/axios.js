import camelcaseKeys from 'camelcase-keys';

export default ({ $axios, error }) => {
  $axios.onResponse(({ data }) => {
    return camelcaseKeys(data, { deep: true });
  });

  $axios.onResponseError(({ response, message }) => {
    if (response && response.status === 404) {
      return error({ statusCode: response.status, message });
    }
  });
};
