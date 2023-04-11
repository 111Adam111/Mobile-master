import React from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const Charger = () => {

  const materials = useLoader(MTLLoader, "charger/Charger.mtl");
  const fbx = useLoader(OBJLoader, "charger/Charger.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });


  return (
      <primitive object={fbx} />
  );
};

export default Charger;
