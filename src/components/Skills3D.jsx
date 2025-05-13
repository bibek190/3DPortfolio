import { OrbitControls, useTexture } from "@react-three/drei";
import React from "react";

const Skills3D = ({ texturePath }) => {
  const texture = useTexture(texturePath);
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 1, 2]} />
      <directionalLight intensity={1} />
      <mesh scale={3}>
        <boxGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Skills3D;
