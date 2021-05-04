import React from "react";

export default function Item({ coin, date, text, status }) {
  return (
    <div className="itemhistory">
      <div className="td">
        {coin < 0 ? (
          <span className="coin red">{coin}</span>
        ) : (
          <span className="coin">{coin}</span>
        )}
      </div>
      <div className="td">{date}</div>
      <div className="td">{text}</div>
      {status === "da-chap-nhan" ? (
        <div className="td">Đã chấp nhận</div>
      ) : (
        <div className="td">Chờ duyệt</div>
      )}
    </div>
  );
}
