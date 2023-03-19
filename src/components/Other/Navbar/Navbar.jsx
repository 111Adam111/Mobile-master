import React, { useContext } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { ThemeContext, ProductContext, CartContext } from "../Context/Context";
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

  const { ID, color } = useContext(ProductContext);
  const [currentProductID, setCurrentProductID] = ID;
  const [currentColor, setCurrentColor] = color;

  const cart = useContext(CartContext);

  return (
    <nav className="navbar-container">
      <div className="navbar-box">
        <Link className="link" to={"/"} onClick={() => setCurrentProductID(0)}>
          <div className="navbar-box__logo">
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
          <div className="navbar-box__cart">
            <p>${cart.getTotalCost()}</p>
            <TiShoppingCart />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
