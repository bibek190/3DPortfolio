import {
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  RenderTexture,
  Sparkles,
  Sphere,
  SpotLight,
  useHelper,
  useTexture,
} from "@react-three/drei";
import React, { useContext, useRef, useState } from "react";

const SphereWobble = () => {
  const [shapeIndex, setShapeIndex] = useState(1);
  const geometries = [
    <sphereGeometry args={[1, 100, 200]} />,
    <icosahedronGeometry args={[1, 0]} />,
    <torusGeometry args={[0.7, 0.3, 16, 100]} />,
    <capsuleGeometry args={[0.4, 1, 4, 8]} />,
    <torusKnotGeometry args={[0.6, 0.15, 100, 16]} />,
    // Add more here
  ];

  const changeShape = () => {
    setShapeIndex((prev) => (prev + 1) % geometries.length);
  };

  return (
    <>
      <Sparkles count={100} size={3} scale={5} color={"#a19995"} />
      <OrbitControls enableZoom={false} autoRotate speed={8} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[-1, -5, -2]} intensity={0.8} />
      <directionalLight position={[-2, 10, 10]} color={"red"} intensity={0.7} />
      <SpotLight position={[0, 2, 2]} color={"white"} />

      <mesh scale={2.2} onClick={changeShape}>
        {geometries[shapeIndex]}
        <MeshDistortMaterial
          color={"#4e58b4"}
          attach="material"
          distort={0.5}
          speed={1.2}
        />
      </mesh>
    </>
  );
};

export default SphereWobble;
