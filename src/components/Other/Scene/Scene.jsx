import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Phone from "../../3DModels/Phone";
import Headphones from "../../3DModels/Headphones";
import Charger from "../../3DModels/Charger";

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
            <Headphones color={color} />
          </group>

          <group
            scale={0.1}
            position={[0, -45, -0.65]}
            rotation={[Math.PI / 2, 0.2, 0]}
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
