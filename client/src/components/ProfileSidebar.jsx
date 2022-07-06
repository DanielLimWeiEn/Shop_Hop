import styled from "styled-components";
import { Link } from "react-router-dom";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import ListAltSharpIcon from "@mui/icons-material/ListAltSharp";

const Side = styled.div`
  box-sizing: border-box;
  width: 15vw;
  height: 100vh;
  background-color: white;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

const SideTop = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-weight: 200;
  font-size: 28px;
`;

const SideItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 7%;
  gap: 5px;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 7px;
  &:hover {
    color: black;
    background-color: lightgray;
  }
`;

const ProfileSidebar = (props) => {
  return (
    <Side>
      <SideTop>
        <ManageAccountsSharpIcon style={{ height: "45", width: "45" }} />
        Account
      </SideTop>
      <SideItem>
        <PersonOutlineSharpIcon />
        <Link to="/profile/" style={{ textDecoration: "none", color: "black" }}>
          Profile
        </Link>
      </SideItem>
      <SideItem>
        <HistorySharpIcon />
        <Link
          to="/profile/history"
          style={{ textDecoration: "none", color: "black" }}
        >
          History
        </Link>
      </SideItem>
      <SideItem>
        <ListAltSharpIcon />
        <Link
          to="/profile/manage"
          style={{ textDecoration: "none", color: "black" }}
        >
          Manage Purchases
        </Link>
      </SideItem>
    </Side>
  );
};

export default ProfileSidebar;
