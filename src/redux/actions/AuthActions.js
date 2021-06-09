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
export const LogIn = (email, password) => {
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
      const result = (await response.json()).data;
      console.log(result.user);
      dispatch(logIn(result.user));
    } catch (e) {
      console.log('error occured ', e);
    }
  };
};
export const SignUp = () => (dispatch) => {};
export const LogOut = () => ({
  type: AuthTypes.LOG_OUT,
});
