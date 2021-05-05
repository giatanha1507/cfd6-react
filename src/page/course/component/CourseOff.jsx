import React from 'react'
import { CourseItem } from '../../../component';

export default function CourseOff() {
    return (
      <section className="section-2 section-blue">
        <div className="container">
          <div className="textbox white">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="Front-end căn bản"
              description=" One of the best
            corporate fashion brands in Sydney"
              image="/img/img.png"
              teacher_name="Vương Đặng"
              teacher_avatar="/img/avt.png"
              user="10"
              heart="200"
            />
            <CourseItem
              name="Front-end căn bản"
              description=" One of the best
            corporate fashion brands in Sydney"
              image="/img/img.png"
              teacher_name="Vương Đặng"
              teacher_avatar="/img/avt.png"
              user="10"
              heart="200"
            />
            <CourseItem
              name="Front-end căn bản"
              description=" One of the best
            corporate fashion brands in Sydney"
              image="/img/img.png"
              teacher_name="Vương Đặng"
              teacher_avatar="/img/avt.png"
              user="10"
              heart="200"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    );
}
