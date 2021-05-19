import React, { useState } from "react";
import AccorInfo from "./AccorInfo";
import ConditionWrap from "./ConditionWrap";
import Teacher from "./Teacher";

export default function Intro({
  content,
  benefits,
  required,
  opening_time,
  schedule,
  teacher,
  long_description,
}) {
  let [active, setActive] = useState(-1);
  function showAccor(i) {
    setActive(i);
    if (active === i) {
      setActive(-1);
    }
  }
  return (
    <section className="section-2">
      <div className="container">
        <p className="des">{long_description}</p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <div className="cover">
          <img src="/img/course-detail-img.png" alt="" />
        </div>
        <h3 className="title">nội dung khóa học</h3>
        {content?.map((value, i) => (
          <AccorInfo
            {...value}
            key={i}
            index={i + 1}
            active={active === i}
            onClick={showAccor.bind(null, i)}
          />
        ))}

        <ConditionWrap benifits={benefits} required={required} />
        <h3 className="title">
          <div className="date-start">lịch học</div>
          <div className="sub">
            *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
          </div>
        </h3>
        <p>
          <strong>Ngày bắt đầu: </strong> {opening_time} <br />
          <strong>Thời gian học: </strong> {schedule}
        </p>
        <h3 className="title">Người dạy</h3>
        <Teacher
          teacher_ava={teacher?.avatar.link}
          name={teacher?.title}
          teacher_des={teacher?.position}
          teacher_intro={teacher?.description}
          teacher_web={teacher?.website}
        />
        <div className="bottom">
          <div className="user">
            <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
          </div>
          <div className="btn main btn-register round">đăng ký</div>
          <div className="btn-share btn overlay round btn-icon">
            <img src="/img/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
