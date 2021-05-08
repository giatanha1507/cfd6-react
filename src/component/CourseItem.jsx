import { Link } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";

export function CourseItem({
  title,
  description,
  image,
  teacher_name,
  teacher_avatar,
  status,
  user,
  heart,
}) {
  let delayLink = useDelayLink();
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={image} alt="" />
          {status === "dang-dien-ra" ? (
            <span className="badge b2">Đang diễn ra</span>
          ) : status === "da-ket-thuc" ? (
            <span className="badge b1">Đã kết thúc</span>
          ) : (
            <span className="badge b3">Sắp diễn ra</span>
          )}
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" />
                {user}
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> {heart}
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </a>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher_avatar} alt="" />
            </div>
            <div className="name">{teacher_name}</div>
          </div>
          <Link to="/register" className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
