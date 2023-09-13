import React from "react";
import { useContext } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product, style }) => {
  const cart = useContext(CartContext);
  const { productData, setProductData } = useContext(ProductContext);

  const handleClick = () => {
    cart.addOneToCart(product.id, 0);
  };

  return (
    <div className={style}>
      <Link
        to={"/"}
        className="link"
        onClick={() => {
          setProductData({
            currentColor: 0,
            productID: product.id,
          });
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
