import styled from "styled-components";

import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Categories = () => {
  return (
    <Container>
      <Body>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Body>
    </Container>
  );
};

export default Categories;
