import * as auth from '../utils/auth';
import { browserHistory } from 'react-router';

export const loginSuccess = (data) => {
  return { type: 'ACCOUNT_SUCCESS', token: data.token, user: data.user };
};

const loginFail = error => {
  return { type: 'ACCOUNT_FAILED', error };
};

const logoutSuccess = () => {
  return { type: 'LOGOUT_SUCCESS' };
};

export const login = () => {
  return (dispatch) => {
    return auth.login().then((user) => {
      var data = {
        token: auth.getToken(),
        user: user
      };
      dispatch(loginSuccess(data));
    }).catch((error) => {
      dispatch(loginFail(error));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return auth.logout().then(() => {
      dispatch(logoutSuccess());
    }).catch(() => {
    });
  };
};
