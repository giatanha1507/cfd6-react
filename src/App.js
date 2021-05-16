import React, { useState, useEffect } from "react";
import { Header, Footer, Login, Logup } from "./component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/home";
import Team from "./page/team";
import Register from "./page/register";
import Project from "./page/project";
import Payment from "./page/payment";
import Profile from "./page/profile";
import Introduce from "./page/intro-coin";
import Faq from "./page/faq";
import Email from "./page/email";
import CourseDetail from "./page/course-detaill";
import Course from "./page/course";
import Operate from "./page/co-operate";
import "./assets/customcss/custom.scss";
import NotFound from "./page/404";
import authApi from "./services/authApi";
import PrivateRoute from "./component/PrivateRouter";
import updateInfoApi from "./services/updateInfoApi";
import { data } from "jquery";

export let Context = React.createContext();

function App() {
  let [state, setState] = useState({
    data: JSON.parse(localStorage.getItem("data")) || {},
    login: JSON.parse(localStorage.getItem("login")) || false,
    loginErr: "",
  });
  console.log(`state.login`, state.login);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(state.login));
    // localStorage.setItem("data", JSON.stringify(state.data));
  }, [state.login]);

  function logOut() {
    setState({
      ...state,
      login: false,
      data: {},
    });
    // localStorage.setItem("login", JSON.stringify(state.login));
  }

  async function handleLogin(form) {
    // console.log(`form o app`, form);
    let res = await authApi.login(form);

    if (res.data) {
      localStorage.setItem("data", JSON.stringify(res.data));

      setState({
        ...state,
        login: true,
        data: res.data,
        // loginErr: "",
      });
      return {
        success: true,
      };
    } else if (res.error) {
      setState({
        ...state,
        loginErr: res.error,
      });
    }
  }

  async function updateInfo(form) {
    let res = await updateInfoApi.update(form);

    if (res.data) {
      localStorage.setItem("data", JSON.stringify(res.data));
      setState({
        ...state,
        data: res.data,
      });
    }
  }

  return (
    <Context.Provider
      value={{
        ...state,
        login: state.login,
        data: state.data,
        logOut,
        handleLogin,
        updateInfo,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Header />
          <Login />
          <Logup />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/register" component={Register} />
            <Route path="/project" component={Project} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/payment" component={Payment} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/faq" component={Faq} />
            <Route path="/email" component={Email} />
            <Route path="/course/:slug" component={CourseDetail} />
            <Route path="/course" component={Course} />
            <Route path="/operate" component={Operate} />
            <Route path="" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
