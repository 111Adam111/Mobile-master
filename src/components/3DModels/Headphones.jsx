import React from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { products } from "../Other/Products/Products";

const Headphones = ({ color }) => {
  const materials = useLoader(MTLLoader, "headphones/untitled.mtl");
  const obj = useLoader(OBJLoader, "headphones/untitled.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  obj.children[3].material.color = products[1].colors[color]?.obj;

  return <primitive object={obj} />;
};

export default Headphones;
