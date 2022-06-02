import { Search } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

import { generateShopping } from "../api";

const Container = styled.form`
  height: 50px;
  border: 1px solid;
  display: flex;
`;

const SearchBar = styled.input`
  border: none;
  font-size: 16px;
  width: 500px;
`;

const Button = styled.button`
  display: flex;
  background-color: #ccccff;
  border: none;
  align-items: center;
  border-left: 1px solid;
  cursor: pointer;
  padding: 20px;

  &:hover {
    background-color: #b3b3ff;
    color: black;
  }
`;
const initialState = {
  query: "",
};

const SearchEngine = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    console.log(formData);
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
        return { ...val, id: index };
      })
    );
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SearchBar onChange={handleChange} name="query" />
      <Button type="submit">
        <Search style={{ color: "black", fontSize: 16 }} />
        Search
      </Button>
    </Container>
  );
};

export default SearchEngine;
