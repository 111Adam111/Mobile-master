import React, { useContext } from "react";
import { products } from "./Products";
import { Link } from "react-router-dom";
import { ProductContext, CartContext } from "./Context";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartItem = ({ product }) => {
  const { currentProductID, setCurrentProductID } = useContext(ProductContext);
  //   const cart = useContext(CartContext);
  const item = products[product.id];
  const cart = useContext(CartContext);
  // console.log(product)
  return (
    <div className="cart-item-container">
      <Link
        to={"/"}
        className="link cart-item"
        onClick={() => setCurrentProductID(product.id)}
      >
        <img src={item.img} alt="" />
        <div className="item-text-box">
          <h2>{item.name}</h2>
          <p>${item.showPrice}</p>
        </div>
      </Link>
      <div className="amount-box">
        <CiCircleMinus
          onClick={() => cart.removeOneFromCart(product.id)}
        />
        <p>{product.quantity}</p>
        <CiCirclePlus onClick={() => cart.addOneToCart(product.id)} />
      </div>
      <div className="sub-total">
        <p>${item.showPrice * product.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
