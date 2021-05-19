import { useState, useEffect } from "react";
import { useParams } from "react-router";
import homeApi from "../../services/homeApi";
import Banner from "./component/Banner";
import Coure from "./component/Coure";
import Intro from "./component/Intro";
import Project from "./component/Project";

export default function CourseDetail() {
  let param = useParams();
  console.log(`param`, param);
  let [course, setCourse] = useState();
  useEffect(async () => {
    let res = await homeApi.course(param.slug);
    setCourse(res.data);
  }, [param.slug]);
  // console.log(`course`, course);
  return (
    <main className="course-detail" id="main">
      <Banner {...course} />
      <Intro {...course} />
      <Project />
      <Coure />
    </main>
  );
}
