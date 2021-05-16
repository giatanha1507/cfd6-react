import { get } from "jquery";
import { useEffect, useState } from "react";
import homeApi from "../../services/homeApi";
import { CourseList } from "../home/component";
import CourseOff from "./component/CourseOff";
import CourseOnl from "./component/CourseOnl";

export default function Course() {
  const [course, setCourse] = useState({
    online: JSON.parse(localStorage.getItem("home"))?.online || [],
    offline: JSON.parse(localStorage.getItem("home"))?.offline || [],
  });
  useEffect(() => {
    homeApi.home().then((res) =>
      setCourse({
        ...course,
        online: res.online,
        offline: res.offline,
      })
    );
  }, []);
  return (
    <main className="homepage" id="main">
      <CourseOnl online={course.online} />
      <CourseOff offline={course.offline} />
    </main>
  );
}
