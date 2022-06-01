
import styled from "styled-components"
import { KeyboardArrowDown } from "@mui/icons-material";

const Container = styled.div`
  height: 30px;
  padding: 20px;
  width: min(90%,1500px);
  display: flex;
  justify-content:space-between;
  align-items:center;
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
  margin: 0px 10px;
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
          <Button>Relevance<KeyboardArrowDown style={{fontSize: 14}}/></Button>
        </FilterBox>
      </Right>
    </Container>
  )
}

export default FilterBar
