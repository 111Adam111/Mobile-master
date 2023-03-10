import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import { Suspense } from "react";

const Speaker = () => {
  const obj = useLoader(FBXLoader, "speaker/s.fbx");

  // const obj = useLoader(GLTFLoader, 'speaker/speaker.gltf')
  // const obj = useLoader(OBJLoader, 'long.obj')
  // const materials = useLoader(MTLLoader, "speaker/speaker.mtl")
  // const obj = useLoader(OBJLoader, 'speaker/speaker.obj', (loader) => {
  //     materials.preload();
  //     loader.setMaterials(materials)
  // })
  console.log(obj);
  const colors = [
    { b: 21, g: 20, r: 20 }, //white
    { b: 0.002, g: 0.002, r: 0.002 }, //gray
    { b: 0.2, g: 0.1, r: 0 }, //light blue
    { b: 0, g: 0.012, r: 0 }, // dark green
    { b: 0, g: 0, r: 2 }, // creamy
    { b: 0, g: 0, r: 0.1 }, // red
  ];
  // obj.children[0].material[1].color = colors[0]
  return (
    <Suspense>
      <primitive object={obj} />
    </Suspense>
  );
};

export default Speaker;
