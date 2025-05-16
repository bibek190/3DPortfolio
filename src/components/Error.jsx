import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const NavigateBack = styled.div`
  a {
    text-decoration: none;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1dacc2;
  color: #ffffff;
  border: none;
  &:active {
    background-color: #85e2ee;
    transform: scale(0.95);
  }
`;

const Error = () => {
  return (
    <Section>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <NavigateBack>
        <Link to="/">
          <Button>Go back Home</Button>
        </Link>
      </NavigateBack>
    </Section>
  );
};

export default Error;
