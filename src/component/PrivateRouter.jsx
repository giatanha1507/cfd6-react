import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRouter(prop) {
  let { login } = useSelector((store) => store.auth);
  if (!login) {
    setTimeout(() => {
      document.querySelector(".login").style.display = "flex";
    }, 0);
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
  return <Route {...prop} />;
}
