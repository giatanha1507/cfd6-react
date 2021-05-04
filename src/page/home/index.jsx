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
