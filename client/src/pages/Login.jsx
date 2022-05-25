import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signIn } from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3771088/pexels-photo-3771088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const ButtonCon = styled.div`
    text-align:center;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #bf8040;
  color: white;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    transform: scale(1.05);
  }
`;

const RegButton = styled.button`

  border: none;
  padding: 15px 20px;
  background-color: #e6ac00;
  color: white;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    transform: scale(1.05);
  }
`;

const RegDesc = styled.div`
    font-size: 15px;
    margin-top: 10px;
    color: #8c8c8c;
    text-align:center;
`;

const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const action = await signIn(formData);
    localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="email" onChange={handleChange} type="email" placeholder="Email"/>
          <Input name="password" onChange={handleChange} type="password" placeholder="Password"/>
          <ButtonCon>
          <Button>Sign In</Button>
          </ButtonCon>
        </Form>
        <RegDesc>New to ShopHop?</RegDesc>
        <ButtonCon>
        <RegButton><Link to="/user/signup" style={linkStyle}>Create your ShopHop Account</Link></RegButton>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
};

export default Login;
