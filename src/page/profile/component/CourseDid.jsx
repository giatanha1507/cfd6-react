import React from "react";

export default function CourseDid({ img, name, des, img_ava, img_name }) {
  return (
    <div className="col-md-6 course">
      <div className="wrap">
        <a href="#" className="cover">
          <img src={img} alt="" />
        </a>
        <div className="info">
          <a href="#" className="name">
            {name}
          </a>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={img_ava} alt="" />
            </div>
            <div className="name">{img_name}</div>
          </div>
          <div className="register-btn">Website</div>
        </div>
      </div>
    </div>
  );
}
