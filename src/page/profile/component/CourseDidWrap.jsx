import React from "react";
import CourseDid from "./CourseDid";

export default function CourseDidWrap() {
  return (
    <div className="tab3">
      <div className="row">
        <CourseDid
          img="/img/img8.png"
          name="GboxMB"
          des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          img_ava="/img/avt.png"
          img_name="Trần Nghĩa"
        />
        <CourseDid
          img="/img/img8.png"
          name="Furnitown"
          des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          img_ava="/img/avt.png"
          img_name="Trần Nghĩa"
        />
      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img src="img/icon-upload.svg" alt="" /> Tải lên
        </div>
      </div>
    </div>
  );
}
