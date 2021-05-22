import React from "react";
import { useRef, useEffect } from "react";
import $ from "jquery";

export default function AccorInfo({
  index,
  intro,
  content,
  title,
  active,
  onClick,
}) {
  let ref = useRef();

  useEffect(() => {
    if (active) {
      console.log(`ref`, ref);
      $(ref.current).slideDown(200);
    } else {
      $(ref.current).slideUp(200);
    }
  }, [active]);

  return (
    <div onClick={onClick} className={`accordion ${active ? "active" : ""}`}>
      <div className="accordion__title">
        <div className="date">Ngày {index}</div>

        <h3>{title}</h3>
      </div>
      <div ref={ref} className="content ">
        {content}
      </div>
    </div>
  );
}
