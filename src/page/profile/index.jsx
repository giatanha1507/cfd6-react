import CoinHistory from "./component/CoinHistory";
import CoinInfo from "./component/CoinInfo";
import CourseDid from "./component/CourseDid";
import MyCourse from "./component/MyCourse";
import PaymentHis from "./component/PaymentHis";
import TopInfo from "./component/TopInfo";

export default function Profile() {
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
              <a href="#" className="active">
                Thông tin tài khoản
              </a>
              <a href="#">Khóa học của bạn</a>
              <a href="#">Dự án đã làm</a>
              <a href="#">Lịch sử thanh toán</a>
              <a href="#">Quản lý COIN của tôi</a>
            </div>
            <div className="tab-content">
              <div className="tab1" style={{ display: "none" }}>
                <label>
                  <p>
                    Họ và tên<span>*</span>
                  </p>
                  <input type="text" placeholder="Nguyễn Văn A" />
                </label>
                <label>
                  <p>
                    Số điện thoại<span>*</span>
                  </p>
                  <input type="text" placeholder="0949******" />
                </label>
                <label>
                  <p>
                    Email<span>*</span>
                  </p>
                  <input
                    defaultValue="vuong.dang@dna.vn"
                    disabled
                    type="text"
                  />
                </label>
                <label>
                  <p>
                    Facebook<span>*</span>
                  </p>
                  <input type="text" placeholder="Facebook url" />
                </label>
                <label>
                  <p>
                    Skype<span>*</span>
                  </p>
                  <input type="text" placeholder="Skype url" />
                </label>
                <div className="btn main rect">LƯU LẠI</div>
              </div>
              <div className="tab2" style={{ display: "none" }}>
                <MyCourse
                  img_cover="/img/img3.png"
                  name="front-end căn bản"
                  date="09/09/2019"
                  time="54 giờ"
                  video="25 video"
                  user="20 học viên"
                  rate="100"
                />
                <MyCourse
                  img_cover="/img/img7.png"
                  name="front-end nâng cao"
                  date="09/09/2019"
                  time="54 giờ"
                  video="25 video"
                  user="20 học viên"
                  rate="50"
                />
              </div>
              <div className="tab3" style={{ display: "none" }}>
                <div className="row">
                  <CourseDid
                    img="/img/img8.png"
                    name="GboxMB"
                    des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    img_ava="/img/avt.png"
                    img_name="Trần Nghĩa"
                  />
                  <CourseDid
                    img="/img/img8.png"
                    name="Furnitown"
                    des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    img_ava="/img/avt.png"
                    img_name="Trần Nghĩa"
                  />
                </div>
                <div className="btn-wrap">
                  <div className="btn overlay btn-icon round">
                    <img src="img/icon-upload.svg" alt="" /> Tải lên
                  </div>
                </div>
              </div>
              <div className="tab4" style={{ display: "none" }}>
                <PaymentHis
                  name="Khóa học CFD1-offline"
                  date="18/10/2020"
                  money="1.500.000 VND"
                />
                <PaymentHis
                  name="Khóa học CFD1-offline"
                  date="18/10/2020"
                  money="1.500.000 VND"
                />
                <PaymentHis
                  name="Khóa học CFD1-offline"
                  date="18/10/2020"
                  money="1.500.000 VND"
                />
                <PaymentHis
                  name="Khóa học CFD1-offline"
                  date="18/10/2020"
                  money="1.500.000 VND"
                />
              </div>
              <div className="tab5 cointab" style={{ display: "block" }}>
                <CoinInfo />
                <CoinHistory />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
