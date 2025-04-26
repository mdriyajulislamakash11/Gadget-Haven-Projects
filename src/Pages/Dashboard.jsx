import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProductStoreCard } from "../utilities/localStorage";
import WishList from "./WishList";
import Cart from "./Cart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [product, setProduct] = useState([]);
  const[productList, setProductList] = useState([])
  const data = useLoaderData();

  useEffect(() => {
    const getProductLS = getProductStoreCard();
    const storeProductInt = getProductLS.map((id = parseInt(id)));
    const filterBYProduct = data.filter((item) =>
      storeProductInt.includes(product.product_id)
    );
    setProduct(filterBYProduct);
  }, []);


  // useEffect(() => {
  //   const getWisList = get
  // }, [])

  return (
    <div className="py-8">
      <div className="text-center bg-[#9538E2]">
        <h3 className="text-white font-bold text-3xl py-6">Dashboard</h3>
        <p className="text-white mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <button
          onClick={() => setActiveTab("cart")}
          className={`mr-4 btn btn-outline font-medium text-lg rounded-full px-16 mb-10
            ${
              activeTab === "cart" ? "text-purple-700 bg-white" : "text-white"
            }`}
        >
          Cart
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`text-white btn btn-outline font-medium text-lg rounded-full px-16 mb-10 
                    ${
                      activeTab === "wishlist" ? "text-purple-900 bg-white" : ""
                    }`}
        >
          Wishlist
        </button>
      </div>

      <div className="text-center mt-8 bg-white p-6 rounded-lg mx-4">
        {activeTab === "cart" && (
          <div>
            <div className="flex justify-between items-center w-10/12 mx-auto">
              <h3 className="text-2xl font-bold">Cart</h3>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Total cost: ${totalCost.toFixed(2)}
                </h2>
                <div>
                  <button
                    onClick={sortByPrice}
                    className="btn btn-outline text-lg px-8 font-bold rounded-full mx-4 text-[#9538E2]"
                  >
                    Sort by Price
                  </button>
                  <button
                    onClick={handlePurchase}
                    className="btn btn-outline text-lg font-bold rounded-full px-8 text-white bg-[#9538E2]"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              {productList.map((product) => (
                <Cart
                  key={product.product_id}
                  product={product}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <div className="">
              {wishList.map((product) => (
                <WishList
                  key={product.product_id}
                  product={product}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
