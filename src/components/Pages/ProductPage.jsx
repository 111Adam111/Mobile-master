import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import Scene from "../Scene";
import { products } from "../Products";
import { CartContext, ProductContext } from "../Context";
import RelatedProducts from "../RelatedProducts";

const ProductPage = () => {
  const { currentProductID, setCurrentProductID } = useContext(ProductContext);
  const [color, setColor] = useState(0);
  const cart = useContext(CartContext);
  const colorAmount = products[currentProductID].colors.length;
  console.log(colorAmount);
  useEffect(() => {
    setColor(0);
  }, [currentProductID]);
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
              {products[currentProductID].colors[color].name}
            </div>
            <Button
              text="Add to cart"
              onClick={() => cart.addOneToCart(currentProductID)}
            />
          </div>
        </div>

        <div className="scene">
          <Scene color={color} productY={products[currentProductID].position} />
          <div className="color-box">
            {products[currentProductID].colors.map((color, index) => (
              <div
                className={color.name + " color"}
                onClick={() => setColor(index)}
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
