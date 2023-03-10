import React, { useContext } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { ThemeContext } from "./Context";
import ModeSwitcher from "./ModeSwitcher";
import { Routes, Route, Link } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import { ProductContext, CartContext } from "./Context";

const Navbar = () => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

  const {ID, color} = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;

  const cart = useContext(CartContext);


  return (
    <nav className="navbar">
      <div className="container">
        <div className="box">
          <Link
            className="link"
            to={"/"}
            onClick={() => setCurrentProductID(0)}
          >
            <div className="logo-box">
              <IoPhonePortraitOutline />
              <p>Mobile Master</p>
            </div>
          </Link>
          <Link className="link" to={"products"}>
            Products
          </Link>
          <Link className="link" to={"about"}>
            About
          </Link>

          <ModeSwitcher />
          {/* <p onClick={()=>
             setIsLightMode(prev => !prev)}>
              Lightmode
          </p> */}
          <Link to={"shopping-cart"} className="link">
            <div className="cart-box">
              <p>${cart.getTotalCost()}</p>
              <TiShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
