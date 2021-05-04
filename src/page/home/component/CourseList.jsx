import React from "react";
import { CourseItem } from "../../../component";

export function CourseList() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
              user="10"
              heart="100"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="sap-dien-ra"
              user="9"
              heart="90"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="/img/img2.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
              user="8"
              heart="80"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="/img/img3.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
              user="7"
              heart="70"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="sap-dien-ra"
              user="6"
              heart="60"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
              user="5"
              heart="50"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
              user="5"
              heart="50"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
              user="5"
              heart="50"
            />
            <CourseItem
              name="React JS"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
              user="5"
              heart="50"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
