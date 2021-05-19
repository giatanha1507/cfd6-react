import React, { useEffect } from "react";
import reactDom from "react-dom";

export function Message({ active, name }) {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".customSection")?.classList.remove("active");
    }, 3000);
  }, [active]);
  return reactDom.createPortal(
    <section
      style={{ width: "100%" }}
      className={`customSection ${active ? "active" : ""}`}
    >
      <div
        className="register-success custom"
        style={{ maxWidth: "100%", display: "block" }}
      >
        <div className="contain">
          <div className="main-title">đăng ký thành công</div>
          <p>
            <strong>
              Chào mừng bạn {name} đã trở thành thành viên mới của CFD Team.
            </strong>{" "}
            <br />
            Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi
            sẽ chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại
            của bạn.
          </p>
        </div>
        <a href="/" className="btn main rect btnCustom">
          về trang chủ
        </a>
      </div>
    </section>,
    document.getElementById("rootMessage")
  );
}
