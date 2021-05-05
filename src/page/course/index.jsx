import CourseOff from "./component/CourseOff";
import CourseOnl from "./component/CourseOnl";

export default function Course() {
  return (
    <main className="homepage" id="main">
      <CourseOnl />
      <CourseOff />
    </main>
  );
}
