import { useDispatch, useSelector } from "react-redux";
import React from "react";
import reactDom from "react-dom";
import useFormValidate from "../hook/useFormValidate";
import { handleRegister } from "./../redux/action/authAction";

export function Logup() {
  function Close() {
    document.querySelector(".logup").style.display = "none";
  }
  let { loginErr } = useSelector((store) => store.auth);

  let { form, error, inputChange, check } = useFormValidate(
    {
      username: "",
      password: "",
      re_password: "",
    },
    {
      rule: {
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
          check: "password",
        },
        re_password: {
          required: true,
          min: 6,
          max: 32,
          re_password: true,
        },
      },
      message: {
        username: {
          required: "Vui long dien ten dang nhap",
          pattern: "Ten dang nhap khong dung dinh dang",
        },
        password: {
          required: "Vui long nhap mat khau",
        },
        re_password: {
          // required: "Mat khau khong trung khop",
          pattern: "Mat khau khong trung khop",
        },
      },
    }
  );
  let dispatch = useDispatch();
  function makeLogup() {
    let err = check();
    if (Object.keys(err).length === 0) {
      dispatch(handleRegister(form, Close));
    }
  }
  return reactDom.createPortal(
    <div className="popup-form popup-login logup" style={{ display: "none" }}>
      <div
        className="wrap"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng ký</h2>
          {loginErr && <p className="text-error">{loginErr}</p>}
          <input
            name="username"
            value={form.username}
            type="text"
            placeholder="Email / Số điện thoại"
            onChange={inputChange}
          />
          {error.username && <p className="text-error">{error.username}</p>}
          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="Mật khẩu"
            onChange={inputChange}
          />
          {error.password && <p className="text-error">{error.password}</p>}
          <input
            name="re_password"
            value={form.re_password}
            type="password"
            placeholder="Nhập lại mật khẩu"
            onChange={inputChange}
          />
          {error.re_password && (
            <p className="text-error">{error.re_password}</p>
          )}

          <div className="btn rect main btn-login" onClick={makeLogup}>
            đăng ký
          </div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
          </div>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
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
