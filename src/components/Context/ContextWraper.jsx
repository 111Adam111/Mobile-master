import CartProvider from "./CartContext";
import ProductProvider from "./ProductContext";
import ThemeProvider from "./ThemeContext";

const ContextWraper = ({ children }) => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default ContextWraper;
