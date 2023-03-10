import React from "react";
import Button from "./Button";
import { products } from "./Products";
// import { Images } from "./Products";
// const charger = require('../asset/charger.png')
import { ProductContext } from "./Context";
import { useContext } from "react";

const RelatedProducts = ({ currentProduct }) => {

  const {ID, color} = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;


  return (
    <div className="related-products">
      {products
        .filter((product) => product.id !== currentProduct)
        .map((product, index) => (
          <div
            className="item"
            key={index}
            onClick={() => {
              setCurrentColor(0)
              setCurrentProductID(product.id)}
            } 
          >
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>${product.showPrice}</p>
            {/* <Button text='Add to cart' /> */}
          </div>
        ))}
    </div>
  );
};

export default RelatedProducts;
