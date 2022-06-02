
import styled from "styled-components"
import { KeyboardArrowDown } from "@mui/icons-material";

const Container = styled.div`
  height: 30px;
  padding: 20px;
  width: min(90%,1500px);
  display: flex;
  justify-content:space-between;
  align-items:center;
  background-color: #ccb3ff;
  border-radius:  10px;
  margin-top: 10px;
`

const Left =styled.div``

const Right = styled.div`

`
const ProductsNo= styled.span`
  font-size: 14px;
`
const FilterBox =styled.div`
  font-size: 14px;
  display:flex;
  align-items:center;
  
`
   
const Button = styled.button`

  display:flex;
  width:130px;
  align-items:center;
  justify-content:space-between;
  background-color:white;
  padding: 5px 2px;
  margin: 0px 10px;
  border: 1.5px solid black;
`

const Dropdown = styled.div`
display: inline-block;
position: relative;
  z-index:3;
  
`

const SortList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin-left: 10px;

`

const SortElement = styled.li`
  background: orange;
  width: 130px;
 
  cursor: pointer;
`


const FilterBar = () => {
  return (
    <Container>
      <Left>
        <ProductsNo>
          1-48 of 200 results for "clothes"
        </ProductsNo>
      </Left>
      <Right>
        <FilterBox>
          Sort By:
          <Dropdown>
            <Button>Relevance<KeyboardArrowDown style={{fontSize: 14}}/></Button>
            <SortList>
              <SortElement>Relavance</SortElement>
              <SortElement>Price (Low to High)</SortElement>
              <SortElement>Price</SortElement>
              <SortElement>Price</SortElement>
            </SortList>
          </Dropdown>
        </FilterBox>
      </Right>
    </Container>
  )
}

export default FilterBar
