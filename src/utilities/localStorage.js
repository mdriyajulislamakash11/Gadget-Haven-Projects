const getProductStoreCard = () => {
  const getProduct = localStorage.getItem("product");
  return getProduct ? JSON.parse(getProduct) : [];
};

const addToLocalStorage = (id) => {
  const findByProduct = getProductStoreCard();

  if (findByProduct.includes(id)) {
    alert("Already Exist...");
  } else {
    findByProduct.push(id);
    localStorage.setItem("product", JSON.stringify(findByProduct));
    alert("successfully added...")
  }
};

export { getProductStoreCard, addToLocalStorage };
