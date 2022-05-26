import { Search } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decode from "jwt-decode";

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
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    setItems(JSON.parse(localStorage.getItem("items")));
  }, [location, user?.token, items]);

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
            <>
              <MenuLink>Hello, {user.result.name}</MenuLink>
              <MenuLink>
                <div textDecoration="none" onClick={logout}>
                  Logout
                </div>
              </MenuLink>
            </>
          ) : (
            <>
              <MenuLink>
                <Link to="/user/signin" style={linkStyle}>
                  Login
                </Link>
              </MenuLink>
            </>
          )}
          {user?.result && (
            <MenuItem>
              <Link to="/cart" style={linkStyle}>
                <Badge
                  badgeContent={items?.reduce((x, y) => x + y.quantity, 0)}
                  color="secondary"
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
