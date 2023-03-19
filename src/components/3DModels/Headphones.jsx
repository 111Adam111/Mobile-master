import React from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { products } from "../Other/Products/Products";

const Headphones = ({ color }) => {
  //   const fbx = useLoader(FBXLoader, 'rhf.fbx')
  // const fbx = useLoader(GLTFLoader, 'rhf.gltf')

  const materials = useLoader(MTLLoader, "headphones/untitled.mtl");
  const fbx = useLoader(OBJLoader, "headphones/untitled.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  fbx.children[3].material.color = products[0].colors[color].obj;

  return (
    <Suspense>
      <primitive object={fbx} />
    </Suspense>
  );
};

export default Headphones;
