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
        "flex items-center rounded-lg shadow-sm h-[48px] pl-6 pr-4 p-2 bg-white w-full flex-1",
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

        <MenuList className="bg-white p-3 rounded-md">
          {categories.map((category, index) => (
            <MenuItem
              key={index}
              onClick={() => handleCategorySelect(category)}
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
          className="border-none focus:ring-0 flex-1"
        />

        <InputRightElement
          onClick={handleSearch}
          cursor="pointer"
          className="flex justify-center items-center"
        >
          <img src={SearchIcon} alt="search-icon" className="py-[3px]" />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
