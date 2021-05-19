import { useState, useEffect } from "react";
import $ from "jquery";
import Head from "./Head";
import useFormValidate from "../../hook/useFormValidate";
import { useHistory, useParams } from "react-router";
import homeApi from "../../services/homeApi";
import { useDispatch, useSelector } from "react-redux";
import registerApi from "../../services/registerApi";
export default function Register() {
  let { slug } = useParams();

  // console.log(`param`, slug);
  let [course, setCourse] = useState();
  let { data } = useSelector((store) => store.auth);
  useEffect(async () => {
    let res = await homeApi.course(slug);
    setCourse(res.data);
  }, [slug]);
  // console.log(`course`, course);
  let { form, error, inputChange, check, setForm } = useFormValidate(
    {
      ...data,
      gender: "male",
      coin: true,
      payment: "chuyen-khoan",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        facebook: {
          required: true,
          pattern: "facebook",
        },
      },
      message: {
        name: {
          required: "Ten khong duoc de trong",
          pattern: "Ten khong dung dinh dang",
        },
        phone: {
          required: "So dien thoai khong duoc de trong",
          pattern: "So dien thoai khong dung dinh dang",
        },
        email: {
          required: "Email khong duoc de trong",
          pattern: "Email khong dung dinh dang",
        },
        facebook: {
          required: "Facebook khong duoc de trong",
          pattern: "Facebook khong dung dinh dang",
        },
      },
    }
  );

  function selectPayment(e) {
    e.preventDefault();
    setForm({
      ...form,
      payment: e.target.dataset.value,
    });
    $(".select .sub").css({ display: "block" });
    closePayment();
  }

  function closePayment() {
    let $select = $(".select .sub a");
    $select.each(function () {
      $(this).click(function () {
        let currentText = $(this).html();
        $(".select .head").text(currentText);
        $(".select .sub").fadeOut(200);
      });
    });
  }
  let his = useHistory();
  async function handleRegister() {
    let err = check();
    if (Object.keys(err).length === 0) {
      let res = await registerApi.register(form, slug);
      console.log(`res`, res);
      if (res?.success) {
        his.push("/");
      }
    }
  }

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <Head />
            <div className="form">
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  name="name"
                  value={form.name}
                  type="text"
                  onChange={inputChange}
                  placeholder="Họ và tên bạn"
                />
                {error.name && <p className="text-error">{error.name}</p>}
              </label>
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  name="phone"
                  value={form.phone}
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={inputChange}
                />
                {error.phone && <p className="text-error">{error.phone}</p>}
              </label>
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  name="email"
                  value={form.email}
                  type="text"
                  onChange={inputChange}
                  placeholder="Email của bạn"
                />
                {error.email && <p className="text-error">{error.email}</p>}
              </label>
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  name="facebook"
                  value={form.facebook}
                  onChange={inputChange}
                  type="text"
                  placeholder="https://facebook.com"
                />
                {error.fb && <p className="text-error">{error.fb}</p>}
              </label>
              <div>
                <label className="disable">
                  <p>Gender</p>
                  <label
                    className="checkcontainer"
                    style={{ marginRight: "30px", zIndex: "1" }}
                  >
                    <strong>Nam</strong>

                    <input
                      type="radio"
                      value="male"
                      name="gender"
                      checked={form.gender === "male"}
                      onChange={inputChange}
                      style={{ zIndex: "10" }}
                    />
                    <span className="checkmark" />
                  </label>
                  <label className="checkcontainer" style={{ zIndex: "1" }}>
                    <strong>Nu</strong>
                    <input
                      type="radio"
                      value="female"
                      name="gender"
                      checked={form.gender === "female"}
                      onChange={inputChange}
                      style={{ zIndex: "10" }}
                    />
                    <span className="checkmark" />
                  </label>
                </label>
              </div>

              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input
                    name="coin"
                    onChange={inputChange}
                    type="checkbox"
                    defaultChecked={form.coin} // coin mình set trên form là true
                  />
                  <span className="checkmark" />
                </div>
              </label>

              <label>
                <p>Hình thức thanh toán</p>
                <div onClick={selectPayment} className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a
                      onClick={inputChange} //này nó chạy cái hàm ở trên
                      data-value="chuyen-khoan" // set cái value này đễ nó biết mình chọn gì r nó lấy giá trị
                      data-name="payment" // rồi cái name này để nó hiển thị cái tên
                      href="#"
                    >
                      Chuyển khoản
                    </a>
                    <a
                      onClick={inputChange}
                      data-value="tien-mat"
                      data-name="payment"
                      href="#"
                    >
                      Thanh toán tiền mặt
                    </a>
                  </div>
                </div>
              </label>

              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <div className="btn main rect" onClick={handleRegister}>
                đăng ký
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
