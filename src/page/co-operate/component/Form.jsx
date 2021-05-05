import React from "react";

export default function Form() {
  return (
    <div className="form">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder="Họ và tên bạn" />
      </label>
      <label>
        <p>Số điện thoại</p>
        <input type="text" placeholder="Số điện thoại" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input type="text" placeholder="Email của bạn" />
      </label>
      <label>
        <p>Website</p>
        <input type="text" placeholder="Đường dẫn website http://" />
      </label>
      <label>
        <p>
          Tiêu đề<span>*</span>
        </p>
        <input type="text" placeholder="Tiêu đề liên hệ" />
      </label>
      <label>
        <p>
          Nội dung<span>*</span>
        </p>
        <textarea name id cols={30} rows={10} defaultValue={""} />
      </label>
      <div className="btn main rect">đăng ký</div>
    </div>
  );
}
