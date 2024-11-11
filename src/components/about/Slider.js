import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Button from "../../UI/button/Button";

function Slider() {
  return (
    <div className="about__block">
      <div className="about__purple"></div>
      <div className="about__top">
        <Button className='about__top-button' count={6}>Фильтры</Button>
        <div className="about__top-wrapper">
          <h5 className="about__top-title">Видео по запросу «Космос»</h5>
          <p className="about__top-count">25.856.471 материала</p>
        </div>
      </div>
      <Swiper
        className="about__swiper"
        spaceBetween={20}
        slidesPerView={1.3}
        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
        loop={true}
      >
        <SwiperSlide className="about__slide">
          <video className="about__video" poster="./images/about/video-1.png" />
          <div className="about__slide-wrapper">
            <h5 className="about__slide-name">Вселенная</h5>
            <span className="about__date">01:03</span>
          </div>
          <button className="about__basket">
            <Sprite icon="basket" width={18} height={18} />
          </button>
          <Link className="about__link" to="#">
            <Sprite icon="more" width={15} height={14} />
            <span>Похожее</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="about__slide">
          <video className="about__video" poster="./images/about/video-2.png" />
          <div className="about__slide-wrapper">
            <h5 className="about__slide-name">Марс</h5>
            <span className="about__date">00:12</span>
          </div>
          <button className="about__basket">
            <Sprite icon="basket" width={18} height={18} />
          </button>
          <Link className="about__link" to="#">
            <Sprite icon="more" width={15} height={14} />
            <span>Похожее</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="about__slide">
          <video className="about__video" poster="./images/about/video-2.png" />
          <div className="about__slide-wrapper">
            <h5 className="about__slide-name">Марс</h5>
            <span className="about__date">00:12</span>
          </div>
          <button className="about__basket">
            <Sprite icon="basket" width={18} height={18} />
          </button>
          <Link className="about__link" to="#">
            <Sprite icon="more" width={15} height={14} />
            <span>Похожее</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="about__slide">
          <video className="about__video" poster="./images/about/video-2.png" />
          <div className="about__slide-wrapper">
            <h5 className="about__slide-name">Марс</h5>
            <span className="about__date">00:12</span>
          </div>
          <button className="about__basket">
            <Sprite icon="basket" width={18} height={18} />
          </button>
          <Link className="about__link" to="#">
            <Sprite icon="more" width={15} height={14} />
            <span>Похожее</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="about__slide">
          <video className="about__video" poster="./images/about/video-2.png" />
          <div className="about__slide-wrapper">
            <h5 className="about__slide-name">Марс</h5>
            <span className="about__date">00:12</span>
          </div>
          <button className="about__basket">
            <Sprite icon="basket" width={18} height={18} />
          </button>
          <Link className="about__link" to="#">
            <Sprite icon="more" width={15} height={14} />
            <span>Похожее</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
