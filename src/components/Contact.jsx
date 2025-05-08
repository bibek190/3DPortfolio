import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  opacity: 0.5;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid white;
`;
const TextArea = styled.textarea`
  background-color: transparent;
  opacity: 0.5;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px;
`;
const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #1dacc2;
`;
const Right = styled.div`
  flex: 1;
`;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("object");
};

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>{/* THREEJS */}</Right>
      </Container>
    </Section>
  );
};

export default Contact;
