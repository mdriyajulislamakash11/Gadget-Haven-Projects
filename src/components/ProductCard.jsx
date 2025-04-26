import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCard = () => {
  const { categories } = useParams();
  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
   if(categories){
    const productFilter = [...data].filter(
        (item) => item.category === categories
      );
      setProducts(productFilter)
   }else{

       setProducts(data);
   }
  }, [categories, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
