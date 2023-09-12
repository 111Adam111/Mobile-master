import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { products } from "../Other/Products/Products";

const Phone = ({ index }) => {
  const obj = useLoader(GLTFLoader, "phone13/13.gltf");
  obj.materials.Back.color = products[0].colors[index].obj;
  return <primitive object={obj.scene} />;
};

export default Phone;
