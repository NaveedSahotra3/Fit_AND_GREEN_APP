import { AuthTypes } from '../types/AuthTypes';

const initialState = {
  isLoggedIn: false,
  user: {},
  loggingIn: false,
  signingUp: false,
  loggedIn: false,
  signedUp: false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
      };
    case AuthTypes.LOG_IN:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case AuthTypes.SIGNING_UP:
      return {
        ...state,
      };
    case AuthTypes.SIGN_UP:
      return {
        ...state,
      };
    case AuthTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
