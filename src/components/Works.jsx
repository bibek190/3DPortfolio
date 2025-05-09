import React from "react";
import styled from "styled-components";

const data = [
  "UX/UI",
  "Development",
  "Illustration",
  "Product-Desigh",
  "Social-Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: attr(texts);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: pink;
    white-space: nowrap;
    width: 0;
  }

  &:hover::after {
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Works = () => {
  return (
    <>
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item, key) => (
                <ListItem key={key} texts={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>Right</Right>
        </Container>
      </Section>
    </>
  );
};

export default Works;
