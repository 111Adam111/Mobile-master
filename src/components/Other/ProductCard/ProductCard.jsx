import React from "react";
import { useContext } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ProductContext, CartContext } from "../Context/Context";

const ProductCard = ({ product, style }) => {
  const cart = useContext(CartContext);

  const handleClick = () => {
    cart.addOneToCart(product.id, 0);
  };

  const { ID, color } = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;

  return (
    <div className={style}>
      <Link
        to={"/"}
        className="link"
        onClick={() => {
          setCurrentProductID(product.id);
          setCurrentColor(0);
        }}
      >
        <div>
          <img src={product.img} alt="" />
        </div>
        <div className="single-product-text">
          <h2>{product.name}</h2>
          <p>${product.showPrice}</p>
        </div>
      </Link>
      <Button text="Add to cart" onClick={handleClick} />
    </div>
  );
};

export default ProductCard;
