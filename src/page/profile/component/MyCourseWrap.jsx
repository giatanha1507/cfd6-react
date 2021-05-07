import React from "react";
import MyCourse from "./MyCourse";

export default function MyCourseWrap() {
  return (
    <div className="tab2">
      <MyCourse
        img_cover="/img/img3.png"
        name="front-end căn bản"
        date="09/09/2019"
        time="54 giờ"
        video="25 video"
        user="20 học viên"
        rate="100"
      />
      <MyCourse
        img_cover="/img/img7.png"
        name="front-end nâng cao"
        date="09/09/2019"
        time="54 giờ"
        video="25 video"
        user="20 học viên"
        rate="50"
      />
    </div>
  );
}
