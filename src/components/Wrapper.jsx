import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  height: 100vh;
  padding-bottom: 200px;
`;
const Childrens = styled.div`
  padding-top: -200px;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Childrens>{children}</Childrens>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
