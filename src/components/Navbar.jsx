import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  background-color: purple;
`;

const Links = styled.div``;
const Logo = styled.img``;
const List = styled.ul``;
const ListItem = styled.li``;
const Icons = styled.div``;
const Icon = styled.img``;
const Button = styled.button``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./image/logo.png" />
          <List>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Skills</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./image/searchIcon.svg" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
