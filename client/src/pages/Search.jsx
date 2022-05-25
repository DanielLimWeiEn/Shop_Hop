import styled from "styled-components"
import { Search } from "@mui/icons-material";

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

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

const Title = styled.h1`
   
`
const Button = styled.button`
    display: flex;
    align-items: center;
    background transparent;
    border: 0.5px solid gray;
`;
const Searching = () => {
  return (
    <Container>
      <SearchContainer>
            <Input />
            <Button>
                <Search style={{ color: "gray", fontSize: 16 }} />
            </Button>
       </SearchContainer>
      <Title>This is a shopping site</Title>
    </Container>
  )
}

export default Searching
