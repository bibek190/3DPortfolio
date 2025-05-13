import React from "react";
import styled from "styled-components";
import Skills3D from "./Skills3D";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const BoxGrid = styled.div`
  height: 200px;
  width: 200px;
`;
//  textures
const textures = [
  "/icons/html-5.png",
  "/icons/css.jpeg",
  "/icons/js.webp",
  "/icons/react.png",
  "/icons/three.png",
  "/icons/github.png",
];

const countBox = 6;

const Skills = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Title>My Skills</Title>
        </Top>
        <Bottom>
          {textures.map((texturePath, index) => {
            return (
              <BoxGrid key={index}>
                <Canvas>
                  <Skills3D texturePath={texturePath} />
                </Canvas>
              </BoxGrid>
            );
          })}
        </Bottom>
      </Container>
    </Section>
  );
};

export default Skills;
