import React from "react";

export default function AccorInfo({ date, intro, content }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <div className="date">{date}</div>
        <h3>{intro}</h3>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
