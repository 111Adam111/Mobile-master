import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { Suspense } from 'react'
import { MeshMatcapMaterial } from 'three';

const PowerBank = () => {
    // const obj = useLoader(FBXLoader, 'powerbank/powerbank.fbx')

    const materials = useLoader(MTLLoader, "powerbank/powerbank.mtl")
    const obj = useLoader(OBJLoader, 'powerbank/powerbank.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials)
    })
    // console.log(obj)
    
    const colors = [
      {b:21,g:20,r:20}, //white
        {b:.002,g:.002,r:0.002}, //gray
        {b:.2,g:.1,r:0}, //light blue
        {b:0,g:.012,r:0}, // dark green
        {b:0,g:0,r:2},  // creamy
        {b:0,g:0,r:.1}, // red
        {b:3,g:3,r:5}
      ];
      // console.log(obj.scene.children[0].material.color)
      // obj.children[0].material.color = colors[4]
      //   obj.scene.nodes[0].material.color = colors[0]
      obj.children[0].material[0].color = colors[6]
      // obj.children[0].material[0].type = 'MeshMatcapMaterial'
      // console.log(obj.children[0].type)
      return (
        <Suspense>
        <primitive object={obj} />
        {/* <primitive object={obj.children[4]} /> */}
        {/* <primitive object={obj.children[5]} /> */}
        {/* <primitive object={obj.children[6]} /> */}
      </Suspense>
      )    
}

export default PowerBank