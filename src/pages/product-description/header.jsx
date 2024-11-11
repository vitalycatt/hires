import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchBar } from "../../components/search-bar";
import { ImageSearchDialog } from "../../components/search-bar/image-search-dialog";

import User from "../../components/header/User";
import ButtonIcon from "../../components/header/ButtonIcon";
import { CartDialog } from "../../components/search-bar/cart-dialog";

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
    <div className="w-screen h-[110px] p-10 flex items-center justify-between">
      <img
        src="../../images/logo-black.svg"
        alt="logo black"
        className="mr-[26px]"
      />

      <SearchBar
        className="mr-3"
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />

      <ImageSearchDialog
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
  );
};
