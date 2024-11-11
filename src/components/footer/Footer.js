import React from "react";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link className="footer__logo" to="/">
            <Sprite icon="logo" width={91} height={23} />
          </Link>
          <div className="footer__wrapper">
            <div className="footer__block">
              <h5 className="footer__block-title">Hi-Res</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Hi-Res
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Юридические документы
                  </Link>
                </li>
              </ul>
              <button className="footer__button">
                <span>Для компаний</span>
                <Sprite icon="lightning" width={16} height={16} />
              </button>
            </div>
            <div className="footer__block">
              <h5 className="footer__block-title">Для покупателей</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Лицензии
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Планы подписки
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Блог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Центр поддержки
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__block">
              <h5 className="footer__block-title">Категории материалов</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Видео
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Фотографии
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Музыка
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Иллюстрации
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" to="#">
                    Звуки
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__block">
              <h5 className="footer__block-title">Мы всегда на связи</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="tel:+74990000000">
                    +7 (499) 000-00-00
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="mailto:hires@hires.ru">
                    hires@hires.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__rights">2024. Все права защищены.</p>
          <ul className="footer__socials">
            <li className="footer__social">
              <a className="footer__social-link" href="#">
                <Sprite icon="yt" width={32} height={32} />
              </a>
            </li>
            <li className="footer__social">
              <a className="footer__social-link" href="#">
                <Sprite icon="tg" width={32} height={32} />
              </a>
            </li>
            <li className="footer__social">
              <a className="footer__social-link" href="#">
                <Sprite icon="in" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
