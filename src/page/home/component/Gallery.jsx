import React, { Fragment, useEffect, useRef } from "react";
// import $ from "jquery";

export function Gallery({ gallery }) {
  let listRef = useRef();
  console.log("here");
  useEffect(() => {
    function teamSlider() {
      const $ = window.$;
      let $carouselGallery = $(".homepage .section-gallery .list"),
        $progressBar = $(".homepage .section-gallery .timeline .process");

      $(listRef.current).flickity({
        contain: true,
        wrapAround: false,
        freeScroll: true,
        cellAlign: "left",
        lazyLoad: 3,
        imagesLoaded: true,
        prevNextButtons: false,
      });

      $carouselGallery.on("scroll.flickity", function (event, progress) {
        progress = Math.max(0.05, Math.min(1, progress));
        $progressBar.width(progress * 100 + "%");
      });

      let ctrPrevGallery = $(".homepage .section-gallery .btn_ctr.prev"),
        ctrNextGallery = $(".homepage .section-gallery .btn_ctr.next");

      ctrPrevGallery.on("click", function () {
        $carouselGallery.flickity("previous");
      });
      ctrNextGallery.on("click", function () {
        $carouselGallery.flickity("next");
      });
    }

    teamSlider();
  }, []);
  if (gallery.length < 1) return <Fragment />;
  console.log(`gallery`, gallery);
  return (
    <section className="section-gallery">
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <div className="list" ref={listRef}>
        {gallery?.map((e, i) => (
          <img data-flickity-lazyload={e} src={e} key={i} />
        ))}
        {/* <img data-flickity-lazyload="/img/img_team1.png" alt="" />
        <img data-flickity-lazyload="/img/img_team2.png" alt="" />
        <img data-flickity-lazyload="/img/img_team3.png" alt="" />
        <img data-flickity-lazyload="/img/img_team4.png" alt="" />
        <img data-flickity-lazyload="/img/img_team3.png" alt="" />
        <img data-flickity-lazyload="/img/img_team4.png" alt="" />
        <img data-flickity-lazyload="/img/img_team1.png" alt="" />
        <img data-flickity-lazyload="/img/img_team2.png" alt="" />
        <img data-flickity-lazyload="/img/img_team3.png" alt="" />
        <img data-flickity-lazyload="/img/img_team4.png" alt="" />
        <img data-flickity-lazyload="/img/img_team3.png" alt="" /> */}
        {/* <div className="item carousel-cell">
          <img data-flickity-lazyload="/img/img_team4.png" alt="" />
        </div> */}
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
}
