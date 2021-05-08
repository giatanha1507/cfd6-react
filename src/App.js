import React from "react";
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
import "./assets/customcss/custom.css";
import NotFound from "./page/404";
function App() {
  return (
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
          <Route path="/profile" component={Profile} />
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
  );
}

export default App;
