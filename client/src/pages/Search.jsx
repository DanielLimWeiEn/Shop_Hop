import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchEngine from "../components/SearchEngine";
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
  const [order, setOrder] = useState("Relevance");
  const [isSearching, setIsSearching] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const navigation = useNavigate();

  const onAdd = (event) => {
    const cartItem = {
      ...listings.find(
        (listing) =>
          listing.val === parseInt(event.target.getAttribute("value"))
      ),
      quantity: 1,
    };

    const contains = cartItems.find((x) => x.val === cartItem.val);
    if (contains) {
      setCartItems(
        cartItems.map((item) => {
          return item.val === cartItem.val
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, cartItem]);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    navigation("/shopping");
  };

  useEffect(() => {
    const orderValues = async () => {
      const regex = /[0-9]*\.[0-9]*/;
      if (order === "Relevance") {
        setListings(listings.sort());
      } else if (order === "Descending") {
        setListings(
          listings.sort(
            (a, b) =>
              parseFloat(a.price.match(regex)[0]) -
              parseFloat(b.price.match(regex)[0])
          )
        );
      } else if (order === "Ascending") {
        setListings(
          listings.sort(
            (a, b) =>
              parseFloat(b.price.match(regex)[0]) -
              parseFloat(a.price.match(regex)[0])
          )
        );
      }
    };

    (async () => await orderValues())();
  }, [order, listings]);

  return (
    <Container>
      <SearchEngine setListings={setListings} setIsSearching={setIsSearching} />
      <FilterBar setOrder={setOrder} listings={listings} />
      <Listings listings={listings} isSearching={isSearching} onAdd={onAdd} />
    </Container>
  );
};

export default Searching;
