import React from "react";
import Condition from "./Condition";

export default function ConditionWrap() {
  return (
    <>
      <h3 className="title">yêu cầu cần có</h3>
      <div className="row row-check">
        <Condition text="Đã từng học qua HTML, CSS" />
        <Condition text="Cài đặt phần mềm Photoshop, Adobe illustrator, Skype" />
      </div>
      <h3 className="title">hình thức học</h3>
      <div className="row row-check">
        <Condition text="Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp." />
        <Condition text="Dạy và thực hành thêm bài tập online thông qua Skype." />
        <Condition
          text="Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD
          Facebook hoặc phần mềm điều khiển máy tính."
        />
        <Condition text="Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team." />
      </div>
    </>
  );
}
