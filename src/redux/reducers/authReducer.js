import {
  AUTH_LOGIN_TYPE,
  AUTH_LOGOUT_TYPE,
  AUTH_USER_DATA,
  REDUX_PERSIST,
} from "../reduxConstant";
import { axiosInstance } from "../store";

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_TYPE: {
      localStorage.setItem("auth_token", action.payload);
      return {
        ...state,
        authToken: action.payload,
        isLoggedIn: true,
      };
    }
    case AUTH_LOGOUT_TYPE: {
      localStorage.clear();
      window.location.reload();
      return {
        ...state,
        user: null,
        authToken: null,
        isLoggedIn: false,
        isSuperUser: null,
      };
    }

    case AUTH_USER_DATA:
      return {
        ...state,
      };

    case REDUX_PERSIST:
      if (action.payload?.authToken) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Token ${action.payload.user?.authToken}`;
      }
      return state;

    default:
      return state;
  }
};
