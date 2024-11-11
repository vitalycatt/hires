import React from "react";
import {  Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sprite from "../../UI/sprite/Sprite";

function Slider() {

  return (
    <Swiper
      className="company__swiper"
      slidesPerView={"auto"}
      direction={"vertical"}
      effect={"coverflow"}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1.7,
        slideShadows: false,
      }}
      autoplay={{delay:1400}}
      modules={[EffectCoverflow,Autoplay]}
      loop={true}
    >
      <SwiperSlide className="company__slide">
        <div
          className="company__user"
          style={{
            backgroundColor: "rgb(247, 237, 254)",
            color: " rgb(129, 69, 181)",
          }}
        >
          В
        </div>
        <div className="company__slide-wrapper">
          <div className="company__slide-top">
            <h5 className="company__slide-name">Команда дизайнеров</h5>
            <Sprite classIcon='company__slide-check' icon="check-blue" width={16} height={16} />
            <Sprite classIcon='company__slide-premium' icon="premium" width={25} height={25} />
          </div>
          <p className="company__subscribers">18 пользователей</p>
          <div className="company__buttons">
            <button className="company__edit">
              <span>Переименовать</span>
              <Sprite icon="pencil" width={18} height={18} />
            </button>
            <button className="company__delete">Удалить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="company__slide">
        <div
          className="company__user"
          style={{
            backgroundColor: "rgb(247, 237, 254)",
            color: " rgb(129, 69, 181)",
          }}
        >
          В
        </div>
        <div className="company__slide-wrapper">
          <div className="company__slide-top">
            <h5 className="company__slide-name">Команда дизайнеров</h5>
            <Sprite icon="check-blue" width={16} height={16} />
            <Sprite icon="premium" width={25} height={25} />
          </div>
          <p className="company__subscribers">18 пользователей</p>
          <div className="company__buttons">
            <button className="company__edit">
              <span>Переименовать</span>
              <Sprite icon="pencil" width={18} height={18} />
            </button>
            <button className="company__delete">Удалить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="company__slide">
        <div
          className="company__user"
          style={{
            backgroundColor: "rgb(247, 237, 254)",
            color: " rgb(129, 69, 181)",
          }}
        >
          В
        </div>
        <div className="company__slide-wrapper">
          <div className="company__slide-top">
            <h5 className="company__slide-name">Команда дизайнеров</h5>
            <Sprite icon="check-blue" width={16} height={16} />
            <Sprite icon="premium" width={25} height={25} />
          </div>
          <p className="company__subscribers">18 пользователей</p>
          <div className="company__buttons">
            <button className="company__edit">
              <span>Переименовать</span>
              <Sprite icon="pencil" width={18} height={18} />
            </button>
            <button className="company__delete">Удалить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="company__slide">
        <div
          className="company__user"
          style={{
            backgroundColor: "rgb(247, 237, 254)",
            color: " rgb(129, 69, 181)",
          }}
        >
          В
        </div>
        <div className="company__slide-wrapper">
          <div className="company__slide-top">
            <h5 className="company__slide-name">Команда дизайнеров</h5>
            <Sprite icon="check-blue" width={16} height={16} />
            <Sprite icon="premium" width={25} height={25} />
          </div>
          <p className="company__subscribers">18 пользователей</p>
          <div className="company__buttons">
            <button className="company__edit">
              <span>Переименовать</span>
              <Sprite icon="pencil" width={18} height={18} />
            </button>
            <button className="company__delete">Удалить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="company__slide">
        <div
          className="company__user"
          style={{
            backgroundColor: "rgb(247, 237, 254)",
            color: " rgb(129, 69, 181)",
          }}
        >
          В
        </div>
        <div className="company__slide-wrapper">
          <div className="company__slide-top">
            <h5 className="company__slide-name">Команда дизайнеров</h5>
            <Sprite icon="check-blue" width={16} height={16} />
            <Sprite icon="premium" width={25} height={25} />
          </div>
          <p className="company__subscribers">18 пользователей</p>
          <div className="company__buttons">
            <button className="company__edit">
              <span>Переименовать</span>
              <Sprite icon="pencil" width={18} height={18} />
            </button>
            <button className="company__delete">Удалить</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
