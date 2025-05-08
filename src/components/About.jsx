import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

// right
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
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
          <Button>My Works </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
