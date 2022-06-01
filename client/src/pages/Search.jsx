import styled from "styled-components";
import { Search } from "@mui/icons-material";
import SearchEngine from "../components/ SearchEngine";

import { products } from "../data"; // Get the data.

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 400px;
`;

const Title = styled.h1``;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0.5px solid gray;
`;

const ProductRegion = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 30vh;
  border: 1px solid;
`;

const Image = styled.img`
  width: 20vw;
  height: 30vh;
`;

const Searching = () => {
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
      <SearchEngine/>
      {/*
      <SearchContainer>
        <Input />
        <Button>
          <Search style={{ color: "gray", fontSize: 16 }} />
        </Button>
      </SearchContainer>
  */}
      <ProductRegion>
        {products.map((product) => {
          return (
            <ProductContainer>
              <Image src={product.image} />
              <h1>{`${product.name} $ ${product.price}`}</h1>
              <Button onClick={onAdd} value={product.id}>
                Add to Cart
              </Button>
            </ProductContainer>
          );
        })}
      </ProductRegion>
    </Container>
  );
};

export default Searching;
