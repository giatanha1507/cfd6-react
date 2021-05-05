import React from 'react'
import CourseMem from './CourseMem';

export default function Project() {
    return (
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <CourseMem
              img="/img/img2.png"
              name="React JS"
              des="One of the best corporate fashion brands in Sydney"
              teacher_ava="/img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseMem
              img="/img/img2.png"
              name="React JS"
              des="One of the best corporate fashion brands in Sydney"
              teacher_ava="/img/avt.png"
              teacher_name="Trần Nghĩa"
            />
            <CourseMem
              img="/img/img2.png"
              name="React JS"
              des="One of the best corporate fashion brands in Sydney"
              teacher_ava="/img/avt.png"
              teacher_name="Trần Nghĩa"
            />
          </div>
        </div>
      </section>
    );
}
