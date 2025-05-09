import { RenderTexture, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  AmbientLight,
  DirectionalLight,
  DodecahedronGeometry,
  MeshDepthMaterial,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  SphereGeometry,
} from "three";

const Cube = () => {
  const cubeRef = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.25;
    cubeRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.5;

    // mesh
  });

  const [matcap] = useMatcapTexture("161B1F_C7E0EC_90A5B3_7B8C9B");

  return (
    <>
      <mesh ref={cubeRef} scale={2}>
        <boxGeometry />
        <meshMatcapMaterial matcap={matcap}>
          <RenderTexture attach="map">
            <color attach="background" args={["white"]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 2, 0]} intensity={0.5} />
            <directionalLight position={[-2, -2, 0]} intensity={0.5} />
            <mesh ref={meshRef}>
              <dodecahedronGeometry args={[2.5]} />
              <meshNormalMaterial />
            </mesh>
          </RenderTexture>
        </meshMatcapMaterial>
      </mesh>
    </>
  );
};

export default Cube;
