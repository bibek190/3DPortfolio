import React from "react";
import styled from "styled-components";
import SphereWobble from "./SphereWobble";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
// left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Job = styled.h2`
  font-size: 60px;
  color: #1dacc2;
`;
const Who = styled.p`
  font-size: 20px;
  color: lightgrey;
`;

const Button = styled.button`
  font-weight: 500;
  background-color: #1dacc2;
  color: #ffffff;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  &:active {
    background-color: #85e2ee;
    transform: scale(0.95);
  }
`;

// right
const Right = styled.div`
  flex: 1;
  position: relative;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>
            Hello,
            <br />
            I am Bibek <br />
          </Title>
          <Job>Frontend Developer</Job>
          <Who>
            I am passionate for translating creative ideas into captivating
            digital experience.
          </Who>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <SphereWobble />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
