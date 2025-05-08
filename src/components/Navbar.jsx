import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Logo = styled.img`
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: 1.5rem;
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.div`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #1dacc2;
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./image/logo.png" />
        </Links>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Skills</ListItem>
        </List>
        <Icons>
          {/* search icon */}
          <Icon>
            <i
              className="fa-solid fa-magnifying-glass "
              style={{ fontSize: "20px" }}
            ></i>
          </Icon>
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
