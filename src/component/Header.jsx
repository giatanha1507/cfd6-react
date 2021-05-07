import { Link, NavLink } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";

function menuOpen() {
  document.body.classList.toggle("menu-is-show");
}

function menuClose() {
  document.body.classList.remove("menu-is-show");
}

export function Header() {
  let delayLink = useDelayLink();
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
          <Link to="/" className="logo" onClick={menuClose}>
            <img src="img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
          </div>
        </div>
      </header>
      <nav className="nav" onClick={menuClose}>
        <ul>
          <li className="li_login">
            <a href="#">Đăng ký / Đăng nhập</a>
          </li>
          <li>
            <NavLink exact to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/team">CFD Team</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Dự Án</NavLink>
          </li>
          <li>
            <NavLink to="/payment">Liên hệ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={menuClose} />
    </>
  );
}
