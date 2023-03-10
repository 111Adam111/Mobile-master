import React, { useContext } from "react";
import Button from "../Button";
import { CartContext } from "../Context";
import ProductCard from "../ProductCard";
import { products } from "../Products";




const AllProducts = () => {
  
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} style="single-product" />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
