import React from "react";
import { Header, Footer } from "./component";
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
import Operate from "./page/co-operate"
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Register /> */}
      {/* <Project/> */}
      {/* <Profile /> */}
      {/* <Payment /> */}
      {/* <Introduce /> */}
      {/* <Faq /> */}
      {/* <Email /> */}
      {/* <CourseDetail/> */}
      {/* <Course /> */}
      <Operate/>

      <Footer />
    </div>
  );
}

export default App;
