const BASE_URL = 'https://android-app-backend.herokuapp.com';
import { AuthTypes } from '../types/AuthTypes';

const logginIn = () => ({
  type: AuthTypes.LOGGING_IN,
});
const logIn = (user) => ({
  type: AuthTypes.LOG_IN,
  payload: user,
});
const signingUp = () => ({
  type: AuthTypes.SIGNING_UP,
});
const signUp = (user) => ({
  type: AuthTypes.SIGN_UP,
  payload: user,
});
const errorOccured = () => ({
  type: AuthTypes.ERROR_OCCURED,
});
export const LogIn = (
  email,
  password,
  successCb = () => {},
  errorCb = () => {}
) => {
  return async (dispatch) => {
    dispatch(logginIn());
    try {
      const response = await fetch(`${BASE_URL}/api/admin/auth/login`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const { success, data } = await response.json();
      // console.log(data);
      if (success) {
        successCb();
        dispatch(logIn(data.user));
      } else {
        dispatch(errorOccured());
        errorCb();
      }
    } catch (e) {
      // console.log('error occured ', e);
      dispatch(errorOccured());
      errorCb();
    }
  };
};
export const SignUp = (
  { email = '', password = '', name = '', mobile = '', address = '' },
  successCb = () => {},
  errorCb = () => {}
) => {
  return async (dispatch) => {
    dispatch(signingUp());
    try {
      const response = await fetch(`${BASE_URL}/api/admin/auth/register`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, mobile, address }),
      });
      const result = await response.json();
      // console.log(result);
      const { data, success } = result;
      if (success) {
        successCb();
        dispatch(signUp(data));
      } else {
        dispatch(errorOccured());
        errorCb();
      }
    } catch (e) {
      // console.log('error occured ', e);
      dispatch(errorOccured());
      errorCb();
    }
  };
};
export const LogOut = () => ({
  type: AuthTypes.LOG_OUT,
});
