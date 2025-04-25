import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="border-2 p-5">
        {/* All button */}
        <div className="border-2 flex flex-col w-72 text-center font-bold text-lg h-10 my-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tab font-bold border px-4 btn-outline my-3 rounded-full ${
                isActive ? "bg-blue-600 text-white" : "bg-white"
              }`
            }
          >
            All
          </NavLink>
        </div>

        {/* Category buttons */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="border-2 flex flex-col w-72 text-center font-bold text-lg h-10 my-3"
          >
            <NavLink
              to={`category/${category.categories}`}
              className={({ isActive }) =>
                `tab font-bold border px-4 btn-outline my-3 rounded-full ${
                  isActive ? "bg-blue-600 text-white" : "bg-white"
                }`
              }
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
