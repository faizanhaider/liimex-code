import axios from 'axios';
import * as auth from './auth';
import * as toastr from './toastr';

const authHeaders = () => {
  return {
    Authorization: auth.getToken() !== null ? `Bearer ${auth.getToken()}` : null,
  };
};

export const get = (endpoint) => {
  return axios({
    url: endpoint,
    method: 'get',
    headers: authHeaders(),
  });
};

export const post = (endpoint, data) => {
  return axios({
    url: endpoint,
    method: 'post',
    headers: authHeaders(),
    responseType: 'json',
    data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        toastr.error(error.response);
      } else {
        toastr.error('Error', error);
      }
    });
};
