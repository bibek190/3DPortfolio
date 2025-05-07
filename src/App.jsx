import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: #ffffff;
  background: #9e8d90;
  background: linear-gradient(
    330deg,
    rgba(33, 23, 28, 1) 0%,
    rgba(33, 24, 56, 1) 40%
  );
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Container>
  );
};

export default App;
