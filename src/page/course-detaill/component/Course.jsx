import React from "react";
import { CourseItem } from "../../../component";

export default function Course({ course }) {
  
  return (
    <section className="section-4">
      <div className="container">
        <div className="textbox">
          <h3 className="sub-title">Khóa học</h3>
          <h2 className="main-title">Liên quan</h2>
        </div>
        <div className="list row">
          {course?.map((value) => (
            <CourseItem {...value} key={value._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
