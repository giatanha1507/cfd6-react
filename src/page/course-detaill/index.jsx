import Banner from "./component/Banner";
import Coure from "./component/Coure";
import Intro from "./component/Intro";
import Project from "./component/Project";

export default function CourseDetail() {
  return (
    <main className="course-detail" id="main">
      <Banner />
      <Intro />
      <Project />
      <Coure />
    </main>
  );
}
