import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  height: 150px;
  width: 100vw;
  color: aliceblue;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;
  position: relative;
`;

const ListItems = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const List = styled.li`
  text-decoration: none;
  list-style: none;
`;

const Reference = styled.h4`
  text-align: start;

  @media (max-width: 768px) {
    font-size: 10px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <ListItems>
          <Link to="https://github.com/bibek190">
            <List>
              <i
                className="fa-brands fa-github fa-2xl"
                style={{ color: "#000000" }}
              ></i>
            </List>
          </Link>
          <Link to="https://www.linkedin.com/in/bibek-shrestha-86a91318b/">
            <List>
              <i
                className="fa-brands fa-linkedin fa-2xl"
                style={{ color: "	#0077B5" }}
              ></i>
            </List>
          </Link>
          <Link to="/contact">
            <List>
              <i
                className="fa-solid fa-envelope fa-2xl"
                style={{ color: "	#FBBC05" }}
              ></i>
            </List>
          </Link>
        </ListItems>
        <h4>Copyright © Bibek. All right reserved.</h4>
        <Reference>
          3d Drone: Space jet: "Buster Drone" (https://skfb.ly/TBnX) by
          LaVADraGoN is licensed under Creative Commons
          Attribution-NonCommercial
          (http://creativecommons.org/licenses/by-nc/4.0/).
        </Reference>
      </Container>
    </Section>
  );
};

export default Footer;
