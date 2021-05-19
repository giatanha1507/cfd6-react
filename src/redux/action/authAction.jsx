import { LOGIN, LOGOUT, UPDATE } from "../type";

export function handleLogin(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function handleLogout() {
  return {
    type: LOGOUT,
  };
}

export function handleUpdate(form) {
  return {
    type: UPDATE,
    payload: form,
  };
}
