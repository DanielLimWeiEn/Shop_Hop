import { Search } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link, useLocation } from "react-router-dom";
import decode from 'jwt-decode';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    transform: scale(1.07);
    font-weight: 600;
  }
`;

const MenuLink = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  &:hover {
    transform: scale(1.07);
    font-weight: 500;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
  
};

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  useEffect(() => {
      const token = user?.token;

      if (token) {
          const decodedToken = decode(token);

          if (decodedToken.exp * 1000 < new Date().getTime()) {
          };
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={linkStyle}>
              ShopHop
            </Link>
          </Logo>
        </Center>
        <Right>
          {user?.result ? (
            <div>Hello. {user.result.name}</div>
          ) : (
            <>
            {/*
              <MenuLink>
                <Link to="/user/signup" style={linkStyle}>
                  Register
                </Link>
              </MenuLink>
               */}
              <MenuLink>
                <Link to="/user/signin" style={linkStyle}>
                  Login
                </Link>
              </MenuLink>
         
            </>
          )}
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
