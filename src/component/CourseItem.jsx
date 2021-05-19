import { Link } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";

export function CourseItem({
  title,
  short_description,
  thumbnail,
  teacher,
  course_status,
  user,
  heart,
  slug,
}) {
  let delayLink = useDelayLink();
  // console.log(`slug`, slug);
  // console.log(`teacher`, teacher);
  // // let k = ;
  // let a = teacher.avatar.thumbnail;
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={`/course/${slug}`}>
          <img src={thumbnail?.link} alt="" />
          {course_status === "dang-dien-ra" ? (
            <span className="badge b2">Đang diễn ra</span>
          ) : course_status === "da-ket-thuc" ? (
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
        </Link>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher?.avatar?.link} alt="" />
            </div>
            <div className="name">{teacher?.title}</div>
          </div>
          <Link to={`/register/${slug}`} className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
