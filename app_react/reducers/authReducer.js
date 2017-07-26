const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  errorMessage: '',
};
import _ from 'lodash';

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'ACCOUNT_SUCCESS':
      newState = _.assign({}, state);
      newState['isLoggedIn'] = true;
      newState['token'] = action.token;
      newState['user'] = action.user;
      return newState;
    case 'ACCOUNT_FAILED':
      newState = _.assign({}, state);
      newState['isLoggedIn'] = true;
      return newState;
    case 'LOGOUT_SUCCESS':
      newState = _.assign({}, state, initialState);
      return newState;
    default:
      return state;
  }
};
