import { createContext, useEffect, useState } from "react";
import { products } from "./Products";
import { getProductData } from "./Products";

export const ThemeContext = createContext("light");

export const ProductContext = createContext(null);

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    let quantity = cartProducts.find((product) => product.id == id)?.quantity;
    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === undefined) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      const updatedCartProducts = cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(updatedCartProducts);
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(() => {
        return cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      });
    }
  };
  ///45:00 https://www.youtube.com/watch?v=_8M-YVY76O8&t=3029s

  const deleteFromCart = (id) =>
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id != id)
    );

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((product) => {
      const productData = getProductData(product.id);
      totalCost += productData.showPrice * product.quantity;
    });
    return totalCost;
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
