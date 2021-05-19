import { LOGIN, LOGOUT, UPDATE, CONTACT } from "../type";

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
  // if (action.type === "LOGIN") {
  //   localStorage.setItem("login", true);
  //   return { ...state, login: true, data: action.payload };
  // } else if (action.type === "LOGOUT") {
  //   localStorage.setItem("login", false);
  //   localStorage.removeItem("data");
  //   return { ...state, login: false };
  // } else if (action.type === "ERROR") {
  //   return { ...state, loginErr: action.payload };
  // } else if (action.type === "UPDATE") {
  //   return { ...state, data: action.payload };
  // }
  return state;
}
