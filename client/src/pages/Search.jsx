import styled from "styled-components";
import { useState } from "react";

import SearchEngine from "../components/SearchEngine";
import { products } from "../data"; // Get the data.
import FilterBar from "../components/FilterBar";
import Listings from "../components/Listings";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Searching = () => {
  const [listings, setListings] = useState([]);

  const onAdd = (event) => {
    const item = {
      ...products.find((x) => x.id === parseInt(event.target.value)),
      quantity: 1,
    };
    if (JSON.parse(localStorage.getItem("items")) === null) {
      localStorage.setItem("items", "[]");
    }

    const contains = JSON.parse(localStorage.getItem("items")).find(
      (x) => x.id === item.id
    );
    if (contains) {
      localStorage.setItem(
        "items",
        JSON.stringify(
          JSON.parse(localStorage.getItem("items")).map((x) =>
            x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
          )
        )
      );
    } else {
      localStorage.setItem(
        "items",
        JSON.stringify([...JSON.parse(localStorage.getItem("items")), item])
      );
    }
  };

  return (
    <Container>
      <SearchEngine setListings={setListings} />
      <FilterBar/>
      <Listings listings={listings} />
    </Container>
  );
};

export default Searching;
