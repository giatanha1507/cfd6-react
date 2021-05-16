import { useEffect, useState } from "react";
import { CourseItem } from "../../component";
import homeApi from "../../services/homeApi";
import {
  Banner,
  CourseList,
  Different,
  Gallery,
  Testimonial,
  Action,
} from "./component";

export default function Home() {
  let [state, setState] = useState({ online: [], offline: [] });

  useEffect(() => {
    homeApi.home().then((res) => {
      setState(res);
      localStorage.setItem("home", JSON.stringify(res));
    });
  }, []);
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList online={state.online} offline={state.offline} />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
