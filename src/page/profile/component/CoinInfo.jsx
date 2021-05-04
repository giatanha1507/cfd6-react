import React from "react";
import LabelItem from "./LabelItem";

export default function CoinInfo() {
  return (
    <div className="coininfo">
      <div className="coininfo__box">
        <h3>
          <strong>Thông tin COIN</strong>
        </h3>
        <div className="coininfo__box-ct">
          <div>
            <img src="img/cfd-coin.png" alt="" />
            <p>
              Bạn có <strong>300</strong> COIN
            </p>
          </div>
        </div>
      </div>
      <div className="coininfo__box">
        <h3>
          <strong>Đổi COIN</strong>
        </h3>
        <div className="coininfo__box-ct">
          <LabelItem text="Voucher Tiki 100k" />
          <LabelItem text="Voucher Tiki 200k" />
          <LabelItem text="Voucher Tiki 300k" />
          <LabelItem text="Thẻ nạp điện thoại 100k" />
          <LabelItem text="Thẻ nạp điện thoại 200k" />
          <LabelItem text="Thẻ nạp điện thoại 500k" />
          <small>
            <i>*Bạn có thể đổi COIN 1 lần</i>
          </small>
        </div>
        <a href="javascript:void(0)" className="btn main">
          Đổi COIN
        </a>
      </div>
    </div>
  );
}
