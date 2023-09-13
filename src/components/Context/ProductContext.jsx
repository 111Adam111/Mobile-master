import { createContext, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    currentColor: 0,
    productID: 0,
  });
  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;

