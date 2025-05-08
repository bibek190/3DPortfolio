import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
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
`;

// right
const Right = styled.div`
  flex: 1;
  position: relative;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Home = () => {
  return (
    <Section>
      <Navbar />
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
          <Img src="./image/portfolio.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
