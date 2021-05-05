import React from "react";

export default function CourseMem({
  img,
  name,
  des,
  teacher_name,
  teacher_ava,
}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a href="#" className="cover">
          <img src={img} alt="" />
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher_ava} alt="" />
            </div>
            <div className="name">{teacher_name}</div>
          </div>
          <div className="register-btn">Website</div>
        </div>
      </div>
    </div>
  );
}
