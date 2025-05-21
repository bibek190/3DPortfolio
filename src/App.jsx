import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import styled from "styled-components";
import Works from "./components/Works";
import { toast, ToastContainer } from "react-toastify";
import Test from "./components/Test";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Layout from "./components/Wrapper";
import Home from "./components/Home";
import Error from "./components/Error";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  color: #ffffff;
  background: #5e6c75;
  background: #0d181c;
  background-image: linear-gradient(
    to right top,
    #0e0d0e,
    #221b26,
    #332840,
    #3f385d,
    #45497d,
    #3f4b80,
    #384e83,
    #2f5086,
    #27426c,
    #203452,
    #19263a,
    #131923
  );
  scrollbar-width: none;
  font-family: "Roboto", sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container id="scroll-container">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/hero"
            element={
              <Layout>
                <Hero />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="myprojects"
            element={
              <Layout>
                <Works />
              </Layout>
            }
          />
          <Route
            path="/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer theme="dark" />
      </Container>
    </BrowserRouter>
  );
};

export default App;
