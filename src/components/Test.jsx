import {
  Html,
  MeshWobbleMaterial,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { Perf } from "r3f-perf";

const Test = () => {
  return (
    <>
      <Canvas dpr={[1, 1.5]}>
        <Suspense>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <Cube />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Test;
