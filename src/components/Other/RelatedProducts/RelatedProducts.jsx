import React from "react";
import { products } from "../Products/Products";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const RelatedProducts = ({ currentProduct }) => {
  const { productData, setProductData } = useContext(ProductContext);

  return (
    <div className="related-products">
      {products
        .filter((product) => product.id !== currentProduct)
        .map((product, index) => (
          <div
            className="item"
            key={index}
            onClick={() => {
              setProductData({
                currentColor: 0,
                productID: product.id,
              });
            }}
          >
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>${product.showPrice}</p>
          </div>
        ))}
    </div>
  );
};

export default RelatedProducts;
