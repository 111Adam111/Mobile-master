import React, { useContext } from "react";
import { products } from "../Products/Products";
import { Link } from "react-router-dom";
import { ProductContext, CartContext } from "../Context/Context";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartItem = ({ product, itemColor }) => {
  const { ID, color } = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;
  const item = products[product.id];
  const cart = useContext(CartContext);
  return (
    <div className="cart-item">
      <Link
        to={"/"}
        className="link cart-product"
        onClick={() => {
          setCurrentColor(0);
          setCurrentProductID(product.id);
        }}
      >
        <img src={item.img} alt="" />
      </Link>
      <div className="desc-amount-container">
        <div className="item-text-box">
          <h2>{item.name}</h2>
          {/* <p>${item.showPrice}</p> */}
          <p>{item.colors[itemColor].name}</p>
        </div>
        <div className="amount-total">
          <div className="amount-box">
            <CiCircleMinus
              onClick={() => cart.removeOneFromCart(product.id, itemColor)}
            />
            <p>{product.quantity}</p>
            <CiCirclePlus onClick={() => cart.addOneToCart(product.id, itemColor)} />
          </div>
          <div className="sub-total">
            <p>${item.showPrice * product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
