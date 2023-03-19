import React, { useContext } from "react";
import Button from "../../Other/Button/Button";
import Scene from "../../Other/Scene/Scene";
import { products } from "../../Other/Products/Products";
import { CartContext, ProductContext } from "../../Other/Context/Context";
import RelatedProducts from "../../Other/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  const { ID, color } = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;
  const cart = useContext(CartContext);

  return (
    <>
      <div className="product-page">
        <div className="product-page__text">
          <h1>{products[currentProductID].name}</h1>
          <p>{products[currentProductID].desc}</p>
          <div className="product-page__action">
            <h2>${products[currentProductID].showPrice}</h2>
            <p>Color:</p>
            <div className="product-page__color">
              {products[currentProductID].colors[currentColor].name}
            </div>
            <Button
              text="Add to cart"
              onClick={() => cart.addOneToCart(currentProductID, currentColor)}
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
