import "./scss/style.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  axesHelper,
  DoubleSide,
  MeshLambertMaterial,
  MeshPhongMaterial,
} from "three";
import { createContext, Suspense, useEffect, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import Phone from "./components/3DModels/Phone";
import Scene from "./components/Scene";
import Navbar from "./components/Navbar";
import ProductPage from "./components/Pages/ProductPage";
import { Routes, Route, Link } from "react-router-dom";
import CartProvider, { ThemeContext } from "./components/Context";
import { ProductContext } from "./components/Context";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AllProducts from "./components/Pages/AllProducts";
import ShoppingCart from "./components/Pages/ShoppingCart";
import About from "./components/Pages/About";

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
const analytics = getAnalytics(app);

function Wall() {
  return (
    <mesh>
      <planeGeometry args={[10, 50]} />
      <meshNormalMaterial side={DoubleSide} />
    </mesh>
  );
}

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [currentProductID, setCurrentProductID] = useState(0);

  return (
    <CartProvider>
      <ProductContext.Provider
        value={{ currentProductID, setCurrentProductID }}
      >
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
          <div className="App" id={isLightMode ? "light" : "dark"}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<ProductPage />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </ProductContext.Provider>
    </CartProvider>
  );
}

export default App;
