import { Search } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

import { generateShopping } from "../api";

const Container = styled.form`
  height: 6%;
  width: 80%;
  border: 1px solid;
  display: flex;
  border-radius: 12px;
`;

const SearchBar = styled.input`
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  width: 100%;
  padding-left: 20px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const Button = styled.button`
  transition: 0.3s;
  display: flex;
  border: none;
  background-color: transparent;
  align-items: center;
  border-left: 1px solid;
  cursor: pointer;
  padding: 20px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  &:hover {
    transform: scale(1.09);
  }
`;
const initialState = {
  query: "",
};

const SearchEngine = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.query === "") {
      return;
    }

    props.setIsSearching(true);
    const action = await generateShopping(formData);
    props.setIsSearching(false);

    const items = action.data.data;
    props.setListings(
      items.map((val, index) => {
        return { ...val, val: index };
      })
    );
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SearchBar onChange={handleChange} name="query" />
      <Button type="submit">
        <Search style={{ color: "black", fontSize: 32 }} />
      </Button>
    </Container>
  );
};

export default SearchEngine;
