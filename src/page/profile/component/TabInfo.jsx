import React from "react";
import useAuth from "../../../hook/useAuth";
import useFormValidate from "../../../hook/useFormValidate";

export default function TabInfo() {
  let { data, updateInfo } = useAuth();
  let { form, error, inputChange, check } = useFormValidate(
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
        skype: {
          required: true,
          pattern: "skype",
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
        skype: {
          required: "Skype khong duoc de trong",
          pattern: "Skype khong dung dinh dang",
        },
        facebook: {
          required: "Facebook khong duoc de trong",
          pattern: "Facebook khong dung dinh dang",
        },
      },
    }
  );
  function handleUpdate() {
    check();
    updateInfo(form);
  }
  return (
    <>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          name="name"
          value={form.name}
          type="text"
          placeholder="Nguyễn Văn A"
          onChange={inputChange}
        />
        {error.name && <p className="text-error profile">{error.name}</p>}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          name="phone"
          value={form.phone}
          type="text"
          placeholder="0949******"
          onChange={inputChange}
        />
        {error.phone && <p className="text-error profile">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          name="facebook"
          value={form.facebook}
          type="text"
          placeholder="Facebook url"
          onChange={inputChange}
        />
        {error.facebook && (
          <p className="text-error profile">{error.facebook}</p>
        )}
      </label>
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Skype<span>*</span>
        </p>
        <input
          name="skype"
          value={form.skype}
          type="text"
          placeholder="Skype url"
          onChange={inputChange}
        />
        {error.skype && <p className="text-error profile">{error.skype}</p>}
      </label>
      <div className="btn main rect" onClick={handleUpdate}>
        LƯU LẠI
      </div>
    </>
  );
}
