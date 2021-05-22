import authApi from "../../services/authApi";
import updateInfoApi from "../../services/updateInfoApi";
import { LOGIN, LOGOUT, UPDATE } from "../type";

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
