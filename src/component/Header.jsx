import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";
import { Context } from "../App";
import useAuth from "../hook/useAuth";

export function Header() {
  let { login, logOut, data } = useAuth();
  // console.log(`login`, login);

  let delayLink = useDelayLink();
  function menuOpen() {
    document.body.classList.toggle("menu-is-show");
  }

  function menuClose() {
    console.log("click");
    // window.scrollTo(0, 0);
    document.querySelector(".loading-page").style.transform =
      "translate(-50%, -50%) scale(12)";
    document.body.classList.remove("menu-is-show");
  }
  function _menuClose() {
    document.body.classList.remove("menu-is-show");
  }
  function _clickLogo(e) {
    // window.scrollTo(0, 0);
    menuClose();
    delayLink(e);
  }

  function _Login(e) {
    e.preventDefault();
    document.querySelector(".login").style.display = "flex";
  }

  function _Logup(e) {
    e.preventDefault();
    document.querySelector(".logup").style.display = "flex";
  }

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={menuOpen}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo" onClick={_clickLogo}>
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {login ? (
              <div className="have-login">
                <div className="account">
                  <Link to="/profile" className="info">
                    <div className="name">{data?.name}</div>
                    <div className="avatar">
                      <img src={data?.avatar} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link to="/profile/my-course-wrap">Khóa học của tôi</Link>
                  <Link to="/profile">Thông tin tài khoản</Link>
                  <Link onClick={logOut} to="">
                    Đăng xuất
                  </Link>
                </div>
              </div>
            ) : (
              <div class="not-login bg-none">
                <a href="#" class="btn-register" onClick={_Login}>
                  Đăng nhập
                </a>
                <a href="#" class="btn main btn-open-login" onClick={_Logup}>
                  Đăng ký
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav" onClick={_menuClose}>
        <ul>
          <li className="li_login">
            <a href="#">Đăng ký / Đăng nhập</a>
          </li>
          <li>
            <NavLink onClick={_clickLogo} exact to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={_clickLogo} to="/team">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={_clickLogo} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={_clickLogo} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={_clickLogo} to="/operate">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={_menuClose} />
    </>
  );
}
