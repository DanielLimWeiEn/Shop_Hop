import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { signUp } from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const ErrorMessage = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: red;
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ff66ff;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const action = await signUp(formData);

      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      setErrorMessage(null);
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit} required>
          <Input name="name" onChange={handleChange} placeholder="Username" />
          <Input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
          <Input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            minLength={5}
            title = "Please enter a password with at least 5 characters"
          />
          <Input
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            minLength={5}
            title= "Please enter a password with at least 5 characters"
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
