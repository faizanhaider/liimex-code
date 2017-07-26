import Promise from 'promise';
import * as api from './api';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getToken = () => localStorage.getItem('token');

export const getUser = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
};


export const isLoggedIn = () => {
  return getToken();
};

export const login = () => {
  return new Promise((resolve, reject) => {
    api.get('/app/token').then((response) => {
      if (response && response.data) {
        setToken(response.data);
        return api.get('/api/users/current');
      } else {
        reject('Not Logged In.');
      }
    }).then((response) => {
      if (response && response.data) {
        setUser(response.data);
        resolve(response.data);
      } else {
        reject('User detail Error.');
      }
    }).catch((error) => {
      reject(error);
    });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
