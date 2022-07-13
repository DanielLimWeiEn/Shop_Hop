import styled from "styled-components";
import { MenuItem, Select } from "@mui/material";

import RecommendationModal from "./RecommendationModal";

const Container = styled.div`
  box-sizing: border-box;
  height: 10%;
  padding: 20px;
  width: min(98%, 1500px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ProductsNo = styled.span`
  font-size: 18px;
`;

const FilterBar = (props) => {
  const updateOrder = (event) => {
    props.orderValues(event.target.value);
  };

  return (
    <Container>
      <Left>
        <ProductsNo>{props.listings.length} results</ProductsNo>
      </Left>
      <Right>
        {props.listings.length !== 0 && (
          <RecommendationModal listings={props.listings} />
        )}
        <Select
          onChange={updateOrder}
          defaultValue="Relevance"
          style={{ fontSize: 18, backgroundColor: "white" }}
        >
          <MenuItem value={"Relevance"}>Relevance</MenuItem>
          <MenuItem value={"Ascending"}>Price (Low to High)</MenuItem>
          <MenuItem value={"Descending"}>Price (High to Low)</MenuItem>
        </Select>
      </Right>
    </Container>
  );
};

export default FilterBar;
