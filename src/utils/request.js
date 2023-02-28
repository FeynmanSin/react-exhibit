import axios from 'axios';

axios.defaults.timeout = 2000;
axios.defaults.baseURL = 'http://localhost:3001';


axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {

  }
);

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {

  }
);


export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then((response) => {
      resolve(response.data.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};