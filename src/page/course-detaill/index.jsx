import { useState, useEffect } from "react";
import { useParams } from "react-router";
import homeApi from "../../services/homeApi";
import Banner from "./component/Banner";
import Course from "./component/Course";
import Intro from "./component/Intro";
import Project from "./component/Project";

export default function CourseDetail() {
  let param = useParams();
  console.log(`param`, param);
  let [course, setCourse] = useState();
  let [course_related, setCourseRelated] = useState();

  useEffect(async () => {
    let res = await homeApi.course(param.slug);
    setCourse(res.data);
  }, [param.slug]);
  // console.log(`course`, course);
  useEffect(async () => {
    let res = await homeApi.course_related(param.slug);
    console.log(`res`, res);
    setCourseRelated(res.data);
  }, [param.slug]);
  console.log(`course_related`, course_related);
  return (
    <main className="course-detail" id="main">
      <Banner {...course} />
      <Intro {...course} />
      <Project />
      <Course course={course_related} />
    </main>
  );
}
