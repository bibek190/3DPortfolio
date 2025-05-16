import React from "react";
import styled from "styled-components";
import Test from "./Test";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 0 15px;
    gap: 10px;
  }
`;
// left
const Left = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Job = styled.h2`
  font-size: 60px;
  color: #1dacc2;
`;
const Who = styled.p`
  font-size: 20px;
  color: lightgrey;

  @media (max-width: 768px) {
    background-color: red;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 1px;
    text-align: start;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    margin-bottom: 200px;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Test />
        </Left>
        <Right>
          <Title>About Me</Title>
          <Who>
            I'm a frontend developer with a passion for crafting clean,
            responsive, and interactive web experiences. I specialize in HTML,
            CSS, JavaScript,React,THREE.js and love turning ideas into smooth,
            user-focused interfaces. I'm always learning new tools, improving my
            skills, and building things that make the web better.I aim to
            deliver clean, maintainable code that users—and teams—love.
          </Who>
          <Link to="/myprojects">
            <Button>My Works </Button>
          </Link>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
