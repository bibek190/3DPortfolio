import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;

const Home = () => {
  return (
    <Section>
      <Navbar />
    </Section>
  );
};

export default Home;
