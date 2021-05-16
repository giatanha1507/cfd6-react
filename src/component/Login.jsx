import React, { useContext } from "react";
import reactDom from "react-dom";
import useAuth from "../hook/useAuth";
import useFormValidate from "../hook/useFormValidate";
export function Login() {
  let { handleLogin, loginErr } = useAuth();
  let { form, error, inputChange, check } = useFormValidate(
    {
      username: "",
      password: "",
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
      },
    }
  );

  function Close() {
    document.querySelector(".login").style.display = "none";
  }

  async function makeLogin() {
    let err = check();
    if (Object.keys(err).length === 0) {
      let res = await handleLogin(form);
      if (res?.success) {
        Close();
      }
    }
  }
  return reactDom.createPortal(
    <div className="popup-form popup-login login" style={{ display: "none" }}>
      <div
        className="wrap"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* login-form */}
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng nhập</h2>
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
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <div className="btn rect main btn-login" onClick={makeLogin}>
            đăng nhập
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
        {/* email form */}
        <div className="ct_email">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <div className="btn rect main btn-next">Tiếp theo</div>
          <div className="back" />
          <div className="close" onClick={Close}>
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
