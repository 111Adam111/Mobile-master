import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import Scene from "../Scene";
import { products } from "../Products";
import { CartContext, ProductContext } from "../Context";
import RelatedProducts from "../RelatedProducts";

const ProductPage = () => {
  const { ID, color } = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;
  const cart = useContext(CartContext);
  // const colorAmount = products[currentProductID].colors.length;

  //changes color to white to preven error when product has less colors than previous
  // const choice = currentColor > colorAmount -1 ? 0 : currentColor
  // useEffect(() => {
  //   setColor(0);
  //   // console.log(color)
  // }, [);
  return (
    <>
      <div className="product-page">
        <div className="text">
          <h1>{products[currentProductID].name}</h1>
          <p>{products[currentProductID].desc}</p>
          <div className="CTA-container">
            <h2>${products[currentProductID].showPrice}</h2>
            <p>Color:</p>
            <div className="color-choice">
              {products[currentProductID].colors[currentColor].name}
            </div>
            <Button
              text="Add to cart"
              onClick={() => cart.addOneToCart(currentProductID)}
            />
          </div>
        </div>

        <div className="scene">
          <Scene
            color={currentColor}
            productY={products[currentProductID].position}
          />
          <div className="color-box">
            {products[currentProductID].colors.map((color, index) => (
              <div
                className={color.name + " color"}
                onClick={() => {
                  setCurrentColor(index);
                  console.log(currentColor);
                }}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <RelatedProducts currentProduct={currentProductID} />
    </>
  );
};

export default ProductPage;
