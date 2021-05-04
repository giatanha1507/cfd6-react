import React from "react";

export default function TopInfo({ avatar, name, des }) {
  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src={avatar} alt="" />
        <div className="camera" />
      </div>
      <div className="name">{name}</div>
      <p className="des">{des}</p>
    </div>
  );
}
