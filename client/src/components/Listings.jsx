
import styled from "styled-components"

const Container= styled.div`
  overflow-y:scroll;
  width: min(90%,1500px);
  height: 100vh;
  
`

const ItemBox = styled.div`
    height:100px;
    display:flex;
    border-bottom: 1px solid grey;
    justify-content:space-between;
    align-items:center;
`

const Image = styled.img`
   margin-left: 20px;
   height: 80px;
   width:80px;

`
const Description = styled.div`
   margin-left: -150px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   gap: 15px;
`
const ItemName = styled.h1`
   font-size: 30px

`

const ItemInfo = styled.span`
   font-size:15px;
`
const PriceInfo = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   gap: 8px;
`
const Logo = styled.img`
  height: 20px;
  width:40px;
`
const Price = styled.span`
   font-size:15px;
`

const StoreBtn = styled.button`
   background-color: orange;
   border-radius: 5px;
   font-weight: 600;
`
const Listings = () => {
  return (
    <Container>
      <ItemBox>
          <Image src="https://m.media-amazon.com/images/I/71cpgD9FyNL._AC_UL480_FMwebp_QL65_.jpg"/>
          <Description>
              <ItemName>Man Nike Shoes Casual</ItemName>
              <ItemInfo>Nike shoes comes along with bla bla bla</ItemInfo>
          </Description>
          <PriceInfo>
              <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"/>
              <Price>$20.00</Price>
              <StoreBtn>Go to Store</StoreBtn>
          </PriceInfo>
      </ItemBox>
    </Container>
  )
}

export default Listings
