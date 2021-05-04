import React from "react";

export default function MyCourse({
  img_cover,
  name,
  date,
  time,
  video,
  user,
  rate,
}) {
  return (
    <div className="item">
      <div className="cover">
        <img src={img_cover} alt="" />
      </div>
      <div className="info">
        <a href="#" className="name">
          {name}
        </a>
        <div className="date">Khai giảng ngày {date}</div>
        <div className="row">
          <div className>
            <img src="img/clock.svg" alt="" className="icon" />
            {time}
          </div>
          <div className>
            <img src="img/play.svg" alt="" className="icon" />
            {video}
          </div>
          <div className>
            <img src="img/user.svg" alt="" className="icon" />
            {user}
          </div>
        </div>
        <div className="process">
          <div className="line">
            <div className="rate" style={{ width: rate + "%" }} />
          </div>
          {rate}%
        </div>
        {rate === "100" ? (
          <div className="btn overlay round btn-continue">Đã hoàn thành</div>
        ) : (
          <div className="btn overlay round btn-continue">Tiếp tục học</div>
        )}
      </div>
    </div>
  );
}
