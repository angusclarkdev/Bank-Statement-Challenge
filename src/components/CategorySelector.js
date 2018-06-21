import React from "react";
import CategoryField from "./CategoryField";
import categories from "../categories";

const CategorySelector = ({ activeCategory, checkboxHandler }) => {
  const categoryFields = categories.map((category, i) => {
    const checked = category === activeCategory;

    return (
      <CategoryField
        key={i}
        checked={checked}
        category={category}
        onChange={checkboxHandler}
      />
    );
  });

  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">{categoryFields}</div>
      </div>
    </div>
  );
};

export default CategorySelector;
