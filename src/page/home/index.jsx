import { Fragment, useEffect, useState } from "react";
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
  let [state, setState] = useState({
    online: [],
    offline: [],
    gallery: [],
    review: [],
  });

  useEffect(() => {
    homeApi.home().then((res) => {
      setState(res);
      console.log(`res`, res);
      console.log(`res.online`, res.online);
      localStorage.setItem("home", JSON.stringify(res));
    });
  }, []);

  if (!state?.gallery?.length > 0) return <Fragment />;
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList online={state.online} offline={state.offline} />
      <Different />
      <Testimonial review={state.review} />
      <Gallery gallery={state.gallery} />
      <Action />
    </main>
  );
}
