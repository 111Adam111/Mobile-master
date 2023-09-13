import React, { useContext } from "react";
import { products } from "../Products/Products";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ product, itemColor }) => {
  const { productData, setProductData } = useContext(ProductContext);
  const cart = useContext(CartContext);
  const item = products[product.id];
  return (
    <div className="cart-item">
      <Link
        to={"/"}
        className="link cart-product"
        onClick={() => {
          setProductData({
            currentColor: 0,
            productID: product.id,
          });
        }}
      >
        <img src={item.img} alt="" />
      </Link>
      <div className="desc-amount-container">
        <div className="item-text-box">
          <h2>{item.name}</h2>
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
