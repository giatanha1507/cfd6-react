import { useEffect, useState } from "react";
import { CourseItem } from "../../component";
import {
  Banner,
  CourseList,
  Different,
  Gallery,
  Testimonial,
  Action,
} from "./component";

export default function Home() {
  const [online, setOnline] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
      .then((res) => res.json())
      .then((res) => setOnline(res.online));
  }, []);
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
