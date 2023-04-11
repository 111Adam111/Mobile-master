import { createContext, useState } from "react";
import { getProductData } from "../Products/Products";

export const ThemeContext = createContext("light");

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [currentProductID, setCurrentProductID] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        ID: [currentProductID, setCurrentProductID],
        color: [currentColor, setCurrentColor],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

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

  const getProductQuantity = (id, color) => {
    let quantity = cartProducts.find(
      (product) => product.id === id && product.color === color
    )?.quantity;
    return quantity;
  };

  const addOneToCart = (id, color) => {
    const quantity = getProductQuantity(id, color);
    if (quantity === undefined) {
      setCartProducts([...cartProducts, { id: id, quantity: 1, color: color }]);
    } else {
      const updatedCartProducts = cartProducts.map((product) =>
        product.id === id && product.color === color
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(updatedCartProducts);
    }
  };

  const removeOneFromCart = (id, color) => {
    const quantity = getProductQuantity(id, color);
    if (quantity === 1) {
      deleteFromCart(id, color);
    } else {
      setCartProducts(() => {
        return cartProducts.map((product) =>
          product.id === id && product.color === color
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      });
    }
  };
  const deleteFromCart = (id, color) =>
    setCartProducts((cartProducts) =>
      cartProducts.filter(
        (product) => !(product.id === id && product.color === color)
      )
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
