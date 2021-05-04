import React from "react";
import { Header, Footer } from "./component";
import Home from "./page/home";
import Team from "./page/team";
import Register from "./page/register"
import Project from "./page/project"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Register /> */}
      <Project/>
      <Footer />
    </div>
  );
}

export default App;
