import styled from "styled-components";
import react, { useState, useEffect } from "react";
import { useNavigate, Link, Routes, Route, useLocation } from "react-router-dom";
import History from "../components/History";
import Manage from "../components/Manage";
import ProfileCom from "../components/ProfileCom";
import ProfileSidebar from "../components/ProfileSidebar";

import { showPurchaseHistory, showPurchases } from '../api/index';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: felx;
`;

const Profile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [purchases, setPurchases] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    const getResponse = async (path) => {
      if (path === "history") {
        const response = await showPurchaseHistory();
        setPurchases(response);
      } else if (path === "manage") {
        const response = await showPurchases();
        setPurchases(response);
      }
    }

    getResponse(currentPath);
  }, [location]);

  return (
    <Container>
      <ProfileSidebar user={user} />
      <Routes>
        <Route path="/" element={<ProfileCom user={user} />} />
        <Route path="/history" element={<History purchases={purchases} />} />
        <Route path="/manage" element={<Manage purchases={purchases} />} />
      </Routes>
    </Container>
  );
};

export default Profile;
