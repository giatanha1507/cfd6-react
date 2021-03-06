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
  async function handleRegisterCourse() {
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
                  H??? v?? t??n<span>*</span>
                </p>
                <input
                  name="name"
                  value={form.name}
                  type="text"
                  onChange={inputChange}
                  placeholder="H??? v?? t??n b???n"
                />
                {error.name && <p className="text-error">{error.name}</p>}
              </label>
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  S??? ??i???n tho???i<span>*</span>
                </p>
                <input
                  name="phone"
                  value={form.phone}
                  type="text"
                  placeholder="S??? ??i???n tho???i"
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
                  placeholder="Email c???a b???n"
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
                <p>S??? d???ng COIN</p>
                <div className="checkcontainer">
                  Hi???n c?? <strong>300 COIN</strong>
                  <input
                    name="coin"
                    onChange={inputChange}
                    type="checkbox"
                    defaultChecked={form.coin} // coin m??nh set tr??n form l?? true
                  />
                  <span className="checkmark" />
                </div>
              </label>

              <label>
                {/* <p></p> */}
                <p>H??nh th???c thanh to??n</p>
                <div onClick={selectPayment} className="select">
                  <div className="head">Chuy???n kho???n</div>
                  <div className="sub">
                    <a
                      onClick={inputChange} //n??y n?? ch???y c??i h??m ??? tr??n
                      data-value="chuyen-khoan" // set c??i value n??y ????? n?? bi???t m??nh ch???n g?? r n?? l???y gi?? tr???
                      data-name="payment" // r???i c??i name n??y ????? n?? hi???n th??? c??i t??n
                      href="#"
                    >
                      Chuy???n kho???n
                    </a>
                    <a
                      onClick={inputChange}
                      data-value="tien-mat"
                      data-name="payment"
                      href="#"
                    >
                      Thanh to??n ti???n m???t
                    </a>
                  </div>
                </div>
              </label>

              <label>
                <p>?? ki???n c?? nh??n</p>
                <input
                  type="text"
                  placeholder="Mong mu???n c?? nh??n v?? l???ch b???n c?? th??? h???c."
                />
              </label>
              <div className="btn main rect" onClick={handleRegisterCourse}>
                ????ng k??
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
