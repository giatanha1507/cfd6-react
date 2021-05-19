import React, { useState } from "react";
import useFormValidate from "../../../hook/useFormValidate";
import { Message } from "../../../component/Message";

import contactApi from "../../../services/contactApi";
import { useSelector } from "react-redux";

export default function Form() {
  let [modal, setModal] = useState(false);
  let { data } = useSelector((store) => store.auth);
  let { form, check, error, inputChange, setForm } = useFormValidate(
    {
      ...data,
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
        title: {
          required: true,
          pattern: "title",
        },
        facebook: {
          required: true,
          pattern: "facebook",
        },
        email: {
          required: true,
          pattern: "email",
        },
        content: {
          required: true,
          pattern: "title",
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
        title: {
          required: "Tieu de khong duoc de trong",
          pattern: "Tieu de khong dung dinh dang",
        },
        email: {
          required: "Email khong duoc de trong",
          pattern: "Email khong dung dinh dang",
        },
        content: {
          required: "Noi dung khong duoc de trong",
          pattern: "Noi dung khong dung dinh dang",
        },
        facebook: {
          required: "Facebook khong duoc de trong",
          pattern: "Facebook khong dung dinh dang",
        },
      },
    }
  );

  async function handleContact() {
    let err = check();
    if (Object.keys(err).length === 0) {
      let res = await contactApi.contact(form);
      if (res?.success) {
        setModal(true);
        setForm({ ...form, name: data.name || "", phone: "" });
      }
    }
  }

  return (
    <div className="form">
      <Message active={modal} name={form.name} />

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          name="name"
          value={form.name}
          onChange={inputChange}
          type="text"
          placeholder="Họ và tên bạn"
        />
        {error.name && <p className="text-error operate">{error.name}</p>}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>Số điện thoại</p>
        <input
          name="phone"
          value={form.phone}
          onChange={inputChange}
          type="text"
          placeholder="Số điện thoại"
        />
        {error.phone && <p className="text-error operate">{error.phone}</p>}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Email<span>*</span>
        </p>
        <input
          name="email"
          value={form.email}
          onChange={inputChange}
          type="text"
          placeholder="Email của bạn"
        />
        {error.email && <p className="text-error operate">{error.email}</p>}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>Facebook</p>
        <input
          name="facebook"
          value={form.facebook}
          onChange={inputChange}
          type="text"
          placeholder="Đường dẫn facebook http://"
        />
        {error.facebook && (
          <p className="text-error operate">{error.facebook}</p>
        )}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Tiêu đề<span>*</span>
        </p>
        <input
          name="title"
          value={form.title}
          onChange={inputChange}
          type="text"
          placeholder="Tiêu đề liên hệ"
        />
        {error.title && <p className="text-error operate">{error.title}</p>}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Nội dung<span>*</span>
        </p>
        <textarea
          name="content"
          value={form.content}
          onChange={inputChange}
          cols={30}
          rows={10}
          defaultValue={""}
        />
        {error.content && <p className="text-error operate">{error.content}</p>}
      </label>
      <div className="btn main rect" onClick={handleContact}>
        đăng ký
      </div>
    </div>
  );
}
