import React, { useContext } from "react";
import Button from "../../Other/Button/Button";
import Scene from "../../Other/Scene/Scene";
import { products } from "../../Other/Products/Products";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";

import RelatedProducts from "../../Other/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  const { productData, setProductData } = useContext(ProductContext);

  const cart = useContext(CartContext);

  return (
    <>
      <div className="product-page">
        <div className="product-page__text">
          <h1>{products[productData.productID].name}</h1>
          <p>{products[productData.productID].desc}</p>
          <div className="product-page__action">
            <div className="product-page__color">
              <p>Color:</p>
              {products[productData.productID].colors[productData.currentColor].name}
            </div>
            <div className="product-page__buy">
              <h2>${products[productData.productID].showPrice}</h2>
              <Button
                text="Add to cart"
                onClick={() =>
                  cart.addOneToCart(productData.productID, productData.currentColor)
                }
              />
            </div>
          </div>
        </div>

        <div className="scene">
          <Scene
            color={productData.currentColor}
            productY={products[productData.productID].position}
          />
          <div className="color-box">
            {products[productData.productID].colors.map((color, index) => (
              <div
                className={color.name + " color"}
                onClick={() => {
                  setProductData({
                    ...productData,
                    currentColor: index,
                  });
                }}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <RelatedProducts currentProduct={productData.productID} />
    </>
  );
};

export default ProductPage;
