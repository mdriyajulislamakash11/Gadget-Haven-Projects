import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="border-2 p-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border-2  flex flex-col w-72 text-center font-bold text-lg h-10 my-3"
          >
            <NavLink
              to={`category/${category.categories}`}
              className={({ isActive }) => (isActive ? "" : "")}
            >
              {category.categories}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
