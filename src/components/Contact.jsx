import styled from "styled-components";
import React, { Suspense, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Canvas } from "@react-three/fiber";
import ContactModel from "./ContactModel";
import { Html } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 50px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  top: -20px;
  left: 200px;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    justify-content: center;
    top: 0;
    align-items: start;
  }
`;
const Title = styled.h1`
  font-weight: 200;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 1;
`;
const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid white;
`;
const TextArea = styled.textarea`
  background-color: transparent;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Right>
          <Suspense>
            <Canvas
              camera={{
                position: isMobile ? [0, 0, 5] : [0, 0, 6],
                fov: 70,
                near: 0.1,
                far: 200,
              }}
            >
              <ContactModel isMobile={isMobile} />
            </Canvas>
          </Suspense>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
