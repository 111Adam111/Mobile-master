import React from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Headphones = () => {
  //   const fbx = useLoader(FBXLoader, 'charger/charger.fbx')
  // const fbx = useLoader(GLTFLoader, 'rhf.gltf')

  const materials = useLoader(MTLLoader, "charger/Charger.mtl");
  const fbx = useLoader(OBJLoader, "charger/Charger.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const colors = [
    { b: 21, g: 20, r: 20 }, //white
    { b: 0.002, g: 0.002, r: 0.002 }, //gray
    { b: 0.2, g: 0.1, r: 0 }, //light blue
    { b: 0, g: 0.012, r: 0 }, // dark green
    { b: 0, g: 0, r: 2 }, // creamy
    { b: 0, g: 0, r: 0.1 }, // red
  ];
  // console.log(fbx.scene.children[0].material.color)
  // fbx.children[0].material.color = colors[4]
  //   fbx.scene.nodes[0].material.color = colors[0]

  return (
    <Suspense>
      <primitive object={fbx} />
    </Suspense>
  );
};

export default Headphones;
