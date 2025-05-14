import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 350px;
  height: 450px;
  background-color: aliceblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  background-color: rgba(173, 216, 230, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
    justify-content: space-between;
    align-items: center;
  }
`;
const Img = styled.img`
  height: 400px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const Content = styled.div`
  text-align: center;
  color: black;
`;
const Name = styled.h2`
  font-size: 25px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;
const Button = styled.a`
  text-decoration: none;
  background-color: #1dacc2;
  color: white;
  padding: 10px 30px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
  &:hover {
    background-color: #85e2ee;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
`;

const ProjectCard = ({ name, img, link, repo }) => {
  return (
    <Card>
      <Img src={img} alt="" />
      <Content>
        <Name>{name}</Name>
      </Content>
      <ButtonWrapper>
        <Button href={link}>Demo</Button>
        <Button href={repo}>Code</Button>
      </ButtonWrapper>
    </Card>
  );
};

export default ProjectCard;
