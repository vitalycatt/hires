import React, { useState } from "react";
import classnames from "classnames";
import { Menu } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";

import SearchIcon from "../../assets/icons/search.svg";
import SeparatorIcon from "../../assets/icons/separator.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

export const SearchBar = ({
  onSearch,
  className,
  categories,
  onCategorySelect,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div
      className={classnames(
        "flex items-center rounded-lg h-[48px] pl-6 pr-4 p-2 bg-white w-full flex-1 sm:px-3 sm:text-xs",
        className
      )}
    >
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          rightIcon={<img src={ChevronDownIcon} alt="chevron-down" />}
        >
          {selectedCategory}
        </MenuButton>

        <MenuList className="absolute top-2 -left-6 w-[175px] py-2 flex flex-col bg-white rounded-xl text-xs leading-4 text-[#1C2024] sm:-left-3">
          {categories.map((category, index) => (
            <MenuItem
              key={index}
              onClick={() => handleCategorySelect(category)}
              className="py-2 pl-[13px] hover:bg-[#F9F9FB] hover:font-medium"
            >
              {category}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <img src={SeparatorIcon} alt="separator" className="mx-3" />

      <InputGroup className="flex-1">
        <Input
          placeholder="Поиск"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-none focus:ring-0 w-full"
        />

        <InputRightElement
          onClick={handleSearch}
          cursor="pointer"
          className="flex justify-center items-center"
        >
          <img
            src={SearchIcon}
            alt="search-icon"
            className="py-[3px] sm:pt-0"
          />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
