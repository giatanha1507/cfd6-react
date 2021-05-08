import React from "react";
import reactDom from "react-dom";

export function Logup() {
  function Close() {
    document.querySelector(".logup").style.display = "none";
  }
  return reactDom.createPortal(
    <div
      onClick={Close}
      className="popup-form popup-login logup"
      style={{ display: "none" }}
    >
      <div
        className="wrap"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="title">Đăng ký</h2>
        <div className="btn btn-icon rect white btn-google">
          <img src="img/google.svg" alt="" />
          Google
        </div>
        <p className="policy">
          Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
          của CFD
        </p>
        <div className="close" onClick={Close}>
          <img src="img/close-icon.png" alt="" />
        </div>
      </div>
    </div>,
    document.body
  );
}
