import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage } from "../utilities/localStorage";

const ProductDetails = () => {
  const data = useLoaderData();
  const { productId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const findByProductDetails = data?.find(
      (item) => item?.product_id == productId
    );
    setDetails(findByProductDetails);
  }, [data, productId]);

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
    specification,
  } = details || {};

  const handeAddToCard = (id) => {
    addToLocalStorage(id)
  };

  const handleAddWishLst = (id) => {
    console.log("Two", id)
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <img
        src={product_image}
        alt={product_title}
        className="w-full h-64 object-cover rounded-xl mb-5"
      />
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{product_title}</h2>
      <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-lg font-semibold text-green-600">
            Price: ${price}
          </p>
          <p
            className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full ${
              availability === "In Stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {availability}
          </p>
        </div>
        <div className="flex items-center gap-2 text-yellow-500">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
          <span className="text-gray-600 text-sm">({rating})</span>
        </div>
      </div>

      {specification && (
        <div className="bg-gray-50 p-4 rounded-xl mt-4">
          <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      )}

{/* Button */}
      <div>
        <button
          onClick={() => handeAddToCard(productId)}
          className="my-4 btn rounded-full bg-[#9538E2] text-lg  text-white"
        >
          Add To Card <RiShoppingCart2Line />
        </button>

        <button
          onClick={() => handleAddWishLst(productId)}
          className="btn text-lg rounded-full ml-4 btn-outline"
        >
          <FaRegHeart />{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
