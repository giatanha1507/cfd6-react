import React from "react";

export default function Teacher({
  name,
  teacher_ava,
  teacher_des,
  teacher_intro,
  teacher_web,
}) {
  return (
    <div className="teaches">
      <div className="teacher">
        <div className="avatar">
          <img src={teacher_ava} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="title">{teacher_des}</div>
          <p className="intro">{teacher_intro}</p>
          <p>
            <strong>Website:</strong> <a href="#">{teacher_web}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
