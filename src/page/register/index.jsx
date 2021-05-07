import { useState } from "react";
import Head from "./Head";
export default function Register() {
  // let [count, setCount] = useState(0);
  // let [phone, setPhone] = useState();
  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");

  let regPhone = /(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/;
  let regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  let regName2 = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  let regEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  let regFB = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    facebook: "",
    coin: true, // khai báo mặc định là true
    payment: "chuyen khoan", // set mặc định là chuyển khoản
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    facebook: "",
  });

  // function Increase() {
  //   if (count >= 10) {
  //     setCount(count + 2);
  //   } else {
  //     setCount(++count);
  //   }
  // }

  // function Decrease() {
  //   if (count > 0) {
  //     setCount(--count);
  //   }
  // }

  function getChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    // nếu type nó là check box thì dựa vào cái value mình đặt mà nó có checked thì nó lấy cái check đó
    if (e.target.type === "checkbox") {
      value = e.target.checked;
      // console.log(e.target.checked); // mở cái này lên là hiểu ngay ok
    }
    // console.log(name);
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSelect(e) {
    setForm({
      ...form,
      payment: e.target.dataset.value, //lấy giá trị như ở input th
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let err = {};

    //  /^\s+$/.test(form.name)

    if (!form.name) {
      err.name = "Tên không được để trống";
    } else if (!regName.test(form.name)) {
      err.name = "Tên không đúng định dạng";
    }
    // làm như tui nó gọn hơn á ô

    if (!form.phone) {
      err.phone = "Số điện thoại là bắt buộc";
    } else if (!regPhone.test(form.phone)) {
      err.phone = "Số điện thoại không đúng định dạng";
    }

    if (!form.email) {
      err.email = "Email là bắt buộc";
    }
    if (form.email) {
      if (!regEmail.test(form.email)) {
        err.email = "Email không đúng định dạng";
      }
    }
    if (!form.facebook) {
      err.facebook = "Facebook là bắt buộc";
    }
    if (form.facebook) {
      if (!regFB.test(form.facebook)) {
        err.facebook = "Facebook không đúng định dạng";
      }
    }

    setError(err);

    // nếu object bị trống thì nó k hiển thị lên í
    if (Object.keys(err).length === 0) {
      // console.log(form);
      return;
    }
  }

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <Head />
            {/* <p style={{ fontSize: 80, marginBottom: 50 }}>
              <span>{count}</span>
            </p>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button> */}
            <div className="form">
              <label style={{ flexWrap: "wrap" }}>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  name="name"
                  value={form.name}
                  type="text"
                  onChange={getChange}
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
                  onChange={getChange}
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
                  onChange={getChange}
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
                  onChange={getChange}
                  type="text"
                  placeholder="https://facebook.com"
                />
                {error.facebook && (
                  <p className="text-error">{error.facebook}</p>
                )}
              </label>

              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input
                    name="coin"
                    onChange={getChange}
                    type="checkbox"
                    defaultChecked={form.coin} // coin mình set trên form là true
                  />
                  <span className="checkmark" />
                </div>
              </label>

              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a
                      onClick={handleSelect} //này nó chạy cái hàm ở trên
                      data-value="chuyen khoan" // set cái value này đễ nó biết mình chọn gì r nó lấy giá trị
                      data-name="payment" // rồi cái name này để nó hiển thị cái tên
                      href="#"
                    >
                      Chuyển khoản
                    </a>
                    <a
                      onClick={handleSelect}
                      data-value="tien mat"
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
              <div className="btn main rect" onClick={handleSubmit}>
                đăng ký
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
