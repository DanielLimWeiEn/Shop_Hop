import styled from "styled-components";
import react from "react";
import { Link } from "react-router-dom";

const Side = styled.div`
  box-sizing: border-box;
  width: 15vw;
  height: 100vh;
  background-color: rgb(245, 250, 253);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding: 20px;
`;

const Picture = styled.img`
  width: 12vw;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Greeting = styled.div`
  width: 15vw;
  height: 80px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const SideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 80px;
  font-size: 24px;
  text-align: center;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const ProfileSidebar = () => {
  return (
    <Side>
      <Picture src="https://img.favpng.com/12/20/1/computer-icons-user-profile-login-avatar-png-favpng-EphX5rTBCrk1QLtEWPmS9h1M9.jpg" />
      <Greeting>Hello User</Greeting>
      <SideItem><Link to="/profile/" style={{textDecoration: "none", color: "black"}}>Profile</Link></SideItem>
      <SideItem><Link to="/profile/history" style={{textDecoration: "none", color: "black"}}>History</Link></SideItem>
      <SideItem><Link to="/profile/manage" style={{textDecoration: "none", color: "black"}}>Manage Purchases</Link></SideItem>
    </Side>
  );
};

export default ProfileSidebar;
