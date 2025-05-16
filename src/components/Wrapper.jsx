import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
const Childrens = styled.div``;

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
