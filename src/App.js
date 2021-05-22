import React, { useState, useEffect } from "react";
import { Header, Footer, Login, Logup } from "./component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
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
import PrivateRoute from "./component/PrivateRouter";
import store from "./redux";

export let Context = React.createContext();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Login />
          <Logup />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <PrivateRoute path="/register/:slug" component={Register} />
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
    </Provider>
  );
}

export default App;
