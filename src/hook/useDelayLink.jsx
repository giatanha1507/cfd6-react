import React from "react";
import { useHistory } from "react-router";

export default function useDelayLink() {
  let history = useHistory();

  function delayLink(e) {
    let href = e.currentTarget.getAttribute("href");
    console.log(href);
    e.preventDefault();
    setTimeout(() => {
      history.push(href);
      document.querySelector(".loading-page").style.transform = "scale(0)";
    }, 1000);

    document.body.classList.remove("menu-is-show");
  }

  return delayLink;
}
