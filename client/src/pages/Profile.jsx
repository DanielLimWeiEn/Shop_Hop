import styled from "styled-components";
import react, { useState } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import History from "../components/History";
import Manage from "../components/Manage";
import ProfileCom from "../components/ProfileCom";
import ProfileSidebar from "../components/ProfileSidebar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: felx;
`;

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Container>
      <ProfileSidebar user={user} />
      <Routes>
        <Route path="/" element={<ProfileCom user={user} />} />
        <Route path="/history" element={<History/>} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Container>
  );
};

export default Profile;
