import { Person, Search, Logout } from "@mui/icons-material";
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
  text-decoration: none;
  margin-right: 30px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.form`
  height: 30px;
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  
`;

const Input = styled.input`
  border: none;
  font-size: 12px;
`;

const Button = styled.button`
   display: flex;
   background: transparent;
   border:none;
   align-items:center;
   border-left: 0.5px solid lightgray;
   cursor:pointer;
   padding:6px;

   &:hover{
      background: black;
      color: white;
   }

`

const Profile = styled.div`
  display: none;
  font-size: 14px;
  margin-top: 5px;
  height: 130px;
  width: 100px;
  padding-top: 5px;
  border-radius:10px;
  background-color: rgba(255,153,153,0.9);
  color:white;
  border: 1px solid;
  z-index:2;
`;

const ProfileDrop = styled.div`
  display:flex;
  justify-content:center;
  margin-right: 10px;
  &:hover ${Profile} {
    display:block;
  }
`;

const ProfileBorder = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  z-index:2;
  position:absolute;
  top: 40px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  cursor:pointer;
  z-index:3;
  &:hover  {
    transform: scale(1.07);
  }

`


const ListItem = styled.li`
  display:flex;
  padding: 10px;
  text-align:center;
  cursor:pointer;
  align-items:center;
  &:hover  {
    color:black;
    background-color: white;
  }
`

const ListTitle = styled.span`
  padding-left: 10px;
  font-size:14px;
`
const ProfileName = styled.span`
  font-size:14px;
  padding-left: 10px;
  font-weight: 700;
`
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
            <Button>
              <Search style={{ color: "gray", fontSize: 16}} />
            </Button>  
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
              
              <ProfileDrop>
                <ProfileBorder>
                  <ProfileImg src = "https://img.favpng.com/12/20/1/computer-icons-user-profile-login-avatar-png-favpng-EphX5rTBCrk1QLtEWPmS9h1M9.jpg"/>
               
                 <Profile>
                   <ListTitle>Signed in as </ListTitle>
                   <ProfileName>{user.result.name}</ProfileName>
								  <ListItem><Person/>Profile</ListItem>
								  <ListItem>
                    <Logout/>
                       <div textDecoration="none" onClick={logout}>
                         Logout
                       </div>         
                  </ListItem>
							   </Profile>
        
                 </ProfileBorder>
              </ProfileDrop>   

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
