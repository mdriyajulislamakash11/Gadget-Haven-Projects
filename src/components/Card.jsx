import React from 'react';

const Card = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden w-full max-w-sm mx-auto">
      <img
        src={product_image}
        alt={product_title}
        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {product_title}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{category}</p>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-full ${
              availability === 'In Stock'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {availability}
          </span>
        </div>

        <div className="flex items-center gap-1 text-yellow-500 mb-4">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
          <span className="text-gray-600 text-sm ml-2">({rating})</span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
