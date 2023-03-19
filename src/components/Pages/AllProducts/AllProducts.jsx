import ProductCard from "../../Other/ProductCard/ProductCard";
import { products } from "../../Other/Products/Products";

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
