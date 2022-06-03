import styled from "styled-components";
import { MenuItem, Select } from "@mui/material";

const Container = styled.div`
  height: 30px;
  padding: 20px;
  width: min(90%, 1500px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccb3ff;
  border-radius: 10px;
  margin-top: 10px;
`;

const Left = styled.div``;

const Right = styled.div``;
const ProductsNo = styled.span`
  font-size: 14px;
`;

const FilterBar = (props) => {
  const updateOrder = (event) => {
    props.setOrder(event.target.value);
  };

  return (
    <Container>
      <Left>
        <ProductsNo>{props.listings.length} results</ProductsNo>
      </Left>
      <Right>
        <Select
          onChange={updateOrder}
          defaultValue="Relevance"
          style={{ fontSize: 14, backgroundColor: "white"}}
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
