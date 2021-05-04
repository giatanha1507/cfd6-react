import React from "react";
import Item from "./Item";

export default function CoinHistory() {
  return (
    <div className="coinhistory">
      <h3>
        <strong>Lịch sử COIN</strong>
      </h3>
      {/* <p>Chưa sử dụng COIN</p> */}
      <div className="itemhistory">
        <div className="td">
          <strong>COIN</strong>
        </div>
        <div className="td">
          <strong>Thời gian</strong>
        </div>
        <div className="td">
          <strong>Nội dung</strong>
        </div>
        <div className="td">
          <strong>Trạng thái</strong>
        </div>
      </div>
      <Item
        coin="-300"
        date="09/09/2020"
        text="Giới thiệu khóa học cho học viên mới"
        status="da-chap-nhan"
      />
      <Item
        coin="+300"
        date="18/10/2020"
        text="Dùng COIN để quy đổi sang Voucher Tiki"
        status="da-chap-nhan"
      />
      <Item
        coin="-300"
        date="18/10/2020"
        text="Dùng COIN để đổi sang Thẻ nạp điện thoại"
        status=""
      />
    </div>
  );
}
