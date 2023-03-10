import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, Stars } from "@react-three/drei";
import Phone from "./3DModels/Phone";
import { useState } from "react";
import Headphones from "./3DModels/Headphones";
import PowerBank from "./3DModels/PowerBank";
import Speaker from "./3DModels/Speaker";
import { BoxGeometry, MeshDepthMaterial } from "three";
import Charger from "./3DModels/Charger";

function Grid() {
  return (
    <mesh>
      <gridHelper rotation={[0, 0, Math.PI / 2]} />
      <gridHelper rotation={[0, Math.PI / 2, 0]} />
      <gridHelper rotation={[Math.PI / 2, 0, 0]} />
      <axesHelper args={[10]} />
    </mesh>
  );
}

const Scene = ({ color, productY }) => {
  return (
    <>
      <Canvas style={{ width: "25rem" }} camera={{ position: [0, 0, -15] }}>
        {/* <Grid/> */}
        <ambientLight intensity={1} color="white" />
        <OrbitControls
          enablePan={false}
          maxDistance={3.9}
          minDistance={3.9}
          minPolarAngle={1}
          maxPolarAngle={2.2}
          autoRotate
        />
        {/* <OrbitControls/> */}

        <group position={[0, productY, 0]}>
          <group rotation={[0, Math.PI / 2, 0]} position={[-0.25, 1.5, 0.1]}>
            <Phone index={color} />
          </group>

          <group scale={0.4} position={[0, -18, 0]}>
            <Headphones />
          </group>

          <group
            scale={0.1}
            position={[0, -45, -0.65]}
            rotation={[Math.PI / 2, .2, 0]}
          >
            <Charger />
          </group>
        </group>

        {/* <group scale={.6} position={[0,0,0]}>
                  <Speaker/>
                </group> */}
        {/* <group scale={1.51} position={[0,0,0]} rotation={[Math.PI/2,0,0]}>
                  <PowerBank/>
                </group> */}
        {/* <mesh>
                  <boxGeometry />
                  <meshMatcapMaterial color={'#fff'}/>
                </mesh> */}
        <spotLight position={[6, 3, 3]} />
      </Canvas>
    </>
  );
};

export default Scene;
