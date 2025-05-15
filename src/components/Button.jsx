import React from "react";
import styled from "styled-components";

const Buttun = styled.button`
  margin: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  position: relative;
  overflow: hidden;
  background-color: #42b2de;
  color: white;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  z-index: 1;
  font-weight: 500;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #868d8f;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    opacity: 1;
  }
`;

const Button = () => {
  return <Buttun>Click</Buttun>;
};

export default Button;
