import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Childrens = styled.div`
  flex: 1;
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
