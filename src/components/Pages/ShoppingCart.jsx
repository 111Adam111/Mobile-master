import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import { CartContext } from "../Context";
import Button from "../Button";

const ShoppingCart = () => {
  const cart = useContext(CartContext);
  // console.log(cart.getTotalCost());

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      {cart.items.length ? (
        <div className="filled-cart">
          {cart.items.map((item, index) => (
            <CartItem product={item} key={index} itemColor={item.color} />
          ))}
          <div className="total">
            <p>Total: ${cart.getTotalCost()}</p>
            <Button text="Checkout" />
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <MdOutlineShoppingCart />
          <h2>Your Shopping cart is empty.</h2>
          <div className="empty-cart-link">
            <Link to={"../products"} className="link">
              <p>Products</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
