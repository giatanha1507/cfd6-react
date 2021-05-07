import React from "react";
import CoinHistory from "./CoinHistory";
import CoinInfo from "./CoinInfo";

export default function Coin() {
  return (
    <div className="tab5 cointab">
      <CoinInfo />
      <CoinHistory />
    </div>
  );
}
