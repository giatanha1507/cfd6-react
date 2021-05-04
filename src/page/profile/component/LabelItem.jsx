import React from "react";

export default function LabelItem({ text }) {
  return (
    <label className="checkcontainer">
      {text}
      <input type="radio" name="radio" />
      <span className="checkmarkradio" />
    </label>
  );
}
