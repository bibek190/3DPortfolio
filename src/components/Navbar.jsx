import React, { useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  padding: 0 10px;
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

  :hover {
    transform: scale(1.05);
    transition: 0.4s ease;
  }
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
  font-size: 1.3rem;

  &.show {
    z-index: 2;
    display: flex;

    flex-direction: column;
    /* justify-content: space-between; */
    width: 100%;
    height: 60%;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    padding: 100px 0;
    font-size: 30px;
    gap: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #1dacc2;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
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
  &:active {
    background-color: #85e2ee;
    transform: scale(0.95);
  }
`;

const Hamburger = styled.div`
  z-index: 3;
  display: none;
  i {
    margin-right: 20px;
    font-size: 40px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNav = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <Section>
      <Container>
        <Links>
          <Link to="/">
            <Logo src="./image/logo.png" />
          </Link>
        </Links>

        <List className={showNavbar ? "show" : ""}>
          <ListItem>
            <Link to="/about">About </Link>
          </ListItem>
          <ListItem>
            <Link to="/myprojects">Projects</Link>
          </ListItem>
          <ListItem>
            <Link to="/skills">Skills</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </List>
        <Icons>
          <Link to="/contact">
            <Button>Hire now</Button>
          </Link>
        </Icons>

        <Hamburger onClick={handleNav}>
          <i className="fa-solid fa-bars"></i>
        </Hamburger>
      </Container>
    </Section>
  );
};

export default Navbar;
