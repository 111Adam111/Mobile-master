import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { products } from "../Products";

import { Suspense } from "react";

const Phone = ({ index }) => {
  const obj = useLoader(GLTFLoader, "phone13/13.gltf");
  obj.materials.Back.color = products[0].colors[index].obj;
  return (
    <Suspense>
      <primitive object={obj.scene} />
    </Suspense>
  );
};

export default Phone;

// const materials = useLoader(MTLLoader, "phone/phone.mtl")
// const obj = useLoader(OBJLoader, 'phone/phone.obj', (loader) => {

//     materials.preload();
//     loader.setMaterials(materials)})
