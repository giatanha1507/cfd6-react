import React, { useState } from "react";
import AccorInfo from "./AccorInfo";
import ConditionWrap from "./ConditionWrap";
import Teacher from "./Teacher";

export default function Intro({ content }) {
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
        <p className="des">
          Many Laravel apps don’t warrant the complexity of a full front-end
          framework like Vue or React. In this series, we’ll walk through a
          handful of simple ways to add dynamic functionality to your apps.
        </p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <div className="cover">
          <img src="img/course-detail-img.png" alt="" />
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

        <ConditionWrap />
        <h3 className="title">
          <div className="date-start">lịch học</div>
          <div className="sub">
            *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
          </div>
        </h3>
        <p>
          <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
          <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ
          12h-15h, Chủ nhật từ 15h-18h
        </p>
        <h3 className="title">Người dạy</h3>
        <Teacher
          teacher_ava="/img/avatar-lg.png"
          name="TRẦN NGHĨA"
          teacher_des="Founder CFD &amp; Creative Front-End Developer"
          teacher_intro="My education, career, and even personal life have been molded
                  by one simple principle; well designed information resonates
                  with people and can change lives.I have a passion for making
                  information resonate. It all starts with how people think.
                  With how humans work. As humans we have learned how to read
                  and write and while that is incredible, we are also already
                  hard-wired to do some things a bit more 'automatically' "
          teacher_web="http://nghiatran.info"
        />
        <div className="bottom">
          <div className="user">
            <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
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
