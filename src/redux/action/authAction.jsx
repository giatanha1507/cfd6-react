import authApi from "../../services/authApi";
import updateInfoApi from "../../services/updateInfoApi";
import { LOGIN, LOGOUT, UPDATE, REGISTER, ERROR } from "../type";

export function handleLogin(form, callback) {
  return async (dispatch) => {
    let res = await authApi.login(form);
    if (res?.data) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      callback();
    }
  };
}

export function handleLogout() {
  return {
    type: LOGOUT,
  };
}
export function handleRegister(form, callback) {
  return async (dispatch) => {
    let res = await authApi.register(form);
    if (res?.data) {
      dispatch({
        type: REGISTER,
        // payload: res.data,
      });
      callback();
    }
    if (res?.error) {
      dispatch({ type: ERROR, payload: res.error });
    }
  };
}

export function handleUpdate(form) {
  return async (dispatch) => {
    let res = await updateInfoApi.update(form);
    if (res?.data) {
      dispatch({
        type: UPDATE,
        payload: res.data,
      });
    }
  };
}
