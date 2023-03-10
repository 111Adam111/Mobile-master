import React from "react";
import { useContext } from "react";
import { CartContext } from "./Context";
import Button from "./Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";

const ProductCard = ({ product, style }) => {
  const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(product.id)
  // useEffect(()=> console.log(cart.items),[cart.items])
  const handleClick = () => {
    cart.addOneToCart(product.id);
    console.log(cart.items)
  };
  const { currentProductID, setCurrentProductID } = useContext(ProductContext);

  return (
    <div className={style}>
      <Link
        to={"/"}
        className="link"
        onClick={() => setCurrentProductID(product.id)}
      >
        <div className="img-box">
          <img src={product.img} alt="" />

        </div>
        <h2>{product.name}</h2>
        <p>${product.showPrice}</p>
      </Link>
      <Button text="Add to cart" onClick={handleClick} />
    </div>
  );
};

export default ProductCard;
