import React, { useContext, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { ProductContext } from "../../Context/ProductContext";
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { productData, setProductData } = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);

  const elements = document.getElementsByClassName("navbar-box__links");

  const handleClick = () => {
    setShowMenu(!showMenu);
    [...elements].forEach((element) => {
      element.classList.toggle("hide");
    });
  };

  const mediaQuery = window.matchMedia("(min-width: 550px)");
  mediaQuery.addListener(() => {
    if (mediaQuery.matches) {
      setShowMenu(true);
      [...elements].forEach((element) => {
        element.classList.remove("hide");
      });
    } else {
      setShowMenu(false);
      [...elements].forEach((element) => {
        element.classList.add("hide");
      });
    }
  });

  return (
    <nav className="navbar-container">
      <Link
        className="link navbar-container__logo"
        to={"/"}
        onClick={() => {
          setProductData({
            ...productData,
            productID: 0,
          });
        }}
      >
        <IoPhonePortraitOutline />
        <p>Mobile Master</p>
      </Link>
      <div className="navbar-box">
        <Link
          className="link navbar-box__links navbar-box__products hide"
          onClick={() => handleClick()}
          to={"products"}
        >
          Products
        </Link>
        <Link
          className="link navbar-box__links hide"
          to={"about"}
          onClick={() => handleClick()}
        >
          About
        </Link>

        <div className="navbar-box__mode">
          <ModeSwitcher />
        </div>

        <Link
          to={"shopping-cart"}
          className="link navbar-box__links hide"
          onClick={() => handleClick()}
        >
          <p className="cart-icon">
            <TiShoppingCart />
          </p>
        </Link>
      </div>
      {showMenu ? (
        <AiOutlineClose className="hamburger" onClick={() => handleClick()} />
      ) : (
        <AiOutlineMenu className="hamburger" onClick={() => handleClick()} />
      )}
    </nav>
  );
};

export default Navbar;
