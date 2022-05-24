import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Container =styled.div`
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  display: flex;
  padding: 20px;
  justify-content:space-between;
`

/*const Heading = styled.h2`
    text-align:center;
    margin-top: 20px;
    font-size: 30px;
` */

export const Categories = () => {
  return (
    <Container>
      {/*<Heading>Categories:</Heading>*/}
      <Body>
        {categories.map(item =>(
            <CategoryItem item={item}/>
        ))}
      </Body>
    </Container>
  )
}

export default Categories;
