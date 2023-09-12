import "./style.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider, {
  ProductProvider,
  ThemeContext,
} from "./components/Other/Context/Context";
import Navbar from "./components/Other/Navbar/Navbar";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import AllProducts from "./components/Pages/AllProducts/AllProducts";
import ShoppingCart from "./components/Pages/ShoppingCart/ShoppingCart";
import About from "./components/Pages/About/About";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Footer from "./components/Other/Footer/Footer";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCan2oP0yaVMKRhm5NFhL4Z1uCvUdxL2ZQ",
  authDomain: "mobilephone-store-5355d.firebaseapp.com",
  projectId: "mobilephone-store-5355d",
  storageBucket: "mobilephone-store-5355d.appspot.com",
  messagingSenderId: "98228245173",
  appId: "1:98228245173:web:b7bd6cfc9f9affa09964fc",
  measurementId: "G-WPTFE414XN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <ProductProvider>
      <CartProvider>
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
          <div className="App" id={isLightMode ? "light" : "dark"}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<ProductPage />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
