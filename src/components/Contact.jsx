import styled from "styled-components";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
  &:active {
    background-color: #85e2ee;
    transform: scale(0.95);
  }
`;
const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hmq2rug",
        "template_xjioh5c",
        ref.current,
        "i5U-nQG7sOsQEJdY3"
      )
      .then(
        (result) => {
          setSuccess(true);
          toast.success("Message sent successfully!");
        },
        (error) => {
          setSuccess(false);
          toast.error("Failed to send message!!");
        }
      );
    setTimeout(() => e.target.reset(), "1000");
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" type="text" required />
            <Input placeholder="Email" name="email" type="email" required />
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
              required
            />
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>{/* THREEJS */}</Right>
      </Container>
    </Section>
  );
};

export default Contact;
