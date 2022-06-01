import { Search } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.form`
   height: 50px;
   border: 1px solid;
   display: flex; 
`

const SearchBar = styled.input`
   border:none;
   font-size:16px;
   width: 500px;
`

const Button = styled.button`
   display: flex;
   background: transparent;
   border:none;
   align-items:center;
   border-left: 1px solid;
   cursor:pointer;
   padding:20px;

   &:hover{
      background: black;
      color: white;
   }

`
const  SearchEngine = () => {
  return (
    <Container>
      <SearchBar/>
      <Button>
        <Search style={{ color: "gray", fontSize: 16 }} />
         Search
      </Button>
    </Container>
  )
}

export default  SearchEngine
