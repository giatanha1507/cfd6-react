import { LOGIN, LOGOUT, UPDATE } from "../type";

let init = {
  login: JSON.parse(localStorage.getItem("login")) || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  loginErr: "",
};

export default function authReducer(state = init, action) {
  // console.log(`action.type`, action.type);
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("login", true);
      localStorage.setItem("data", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        login: true,
        data: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("login");
      localStorage.removeItem("data");
      return {
        ...state,
        login: false,
        data: "",
      };
    case UPDATE:
      localStorage.setItem("data", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }

  return state;
}
