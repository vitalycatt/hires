import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchBar } from "../../components/search-bar";
import { CartDialog } from "../../components/search-bar/cart-dialog";
import { ImageSearchDialog } from "../../components/search-bar/image-search-dialog";

import User from "../../components/header/User";
import ButtonIcon from "../../components/header/ButtonIcon";

import BurgerIcon from "../../assets/icons/burger.svg";

const categories = ["Видео", "Изображения", "Документы", "Аудио"];
const cartProducts = ["Видео", "Изображения", "Документы", "Аудио"];

export const Header = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div className="container mx-auto px-10 pt-[30px] pb-6 flex items-center justify-between sm:flex-col sm:px-5 sm:pt-5 sm:pb-8">
      <div className="w-full flex items-center justify-between">
        <img
          src={BurgerIcon}
          alt="burder-icon"
          className="hidden mr-[11px] sm:block"
        />
        <img
          src="../../images/logo-black.svg"
          alt="logo-icon"
          className="mr-[26px]"
        />

        <SearchBar
          className="mr-3 sm:hidden"
          categories={categories}
          onCategorySelect={handleCategorySelect}
          onSearch={handleSearch}
        />

        <ImageSearchDialog
          className="sm:hidden"
          uploadImage={uploadImage}
          setUploadImage={setUploadImage}
        />

        <nav className="header__nav">
          <div className="header__menu">
            <ul className="header__list header__ml">
              <li className="header__item">
                <Link className="header__link" to="#">
                  Планы подписки
                </Link>
              </li>
            </ul>

            <ButtonIcon />
          </div>

          <User />

          <CartDialog cartProducts={cartProducts} />
        </nav>
      </div>

      <SearchBar
        className="hidden sm:flex sm:w-full sm:mt-4"
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />
    </div>
  );
};
