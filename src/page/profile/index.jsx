import Coin from "./component/Coin";
import CourseDidWrap from "./component/CourseDidWrap";
import Info from "./component/Info";
import MyCourseWrap from "./component/MyCourseWrap";
import PayMentWrap from "./component/PayMentWrap";
import TopInfo from "./component/TopInfo";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

export default function Profile() {
  let { path } = useRouteMatch();
  return (
    <main className="profile" id="main">
      <section>
        <TopInfo
          avatar="/img/avatar-lg.png"
          name="trần nghĩa"
          des="Thành viên của team CFD1-OFFLINE"
        />
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink exact to={`${path}`}>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={`${path}/my-course-wrap`}>Khóa học của bạn</NavLink>
              <NavLink to={`${path}/course-did-wrap`}>Dự án đã làm</NavLink>
              <NavLink to={`${path}/payment-wrap`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route
                  path={`${path}/my-course-wrap`}
                  component={MyCourseWrap}
                />
                <Route
                  path={`${path}/course-did-wrap`}
                  component={CourseDidWrap}
                />
                <Route path={`${path}/payment-wrap`} component={PayMentWrap} />
                <Route path={`${path}/coin`} component={Coin} />
                <Route path="" component={Info} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
