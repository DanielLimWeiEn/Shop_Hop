import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  width: min(90%, 1500px);
  height: 100vh;
`;

const ItemBox = styled.div`
  height: 140px;
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  margin-left: 20px;
  height: 120px;
  width: 100px;
`;

const Description = styled.div`
  display: flex;
  align-items:center;
  width: min(90%, 1200px);
  height: 100px;
  margin-left: 20px;
`;

const ItemInfo = styled.span`
  font-size: 20px;
  font-weight:600;
  
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  gap: 15px;
`;

const Logo = styled.img`
  height: 20px;
  width: 40px;
`;

const Price = styled.span`
  font-size: 19px;
`;

const StoreBtn = styled.a`
  text-decoration: none; 
  color: #66ff66;
  font-size: 16px;
  font-weight: 600;
  padding: 5px; 
`;

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const ImageLoad = styled.img`
   height: 400px;
   width:500px;
`;

const Button = styled.div`
  background-color: #944dff;
  border-radius: 5px;
  text-align:center;
`;

const CartAdd = styled.button`
  background-color: #944dff;
  border-radius: 5px;
`;

const Listings = (props) => {
  return (
    <Container>
      {props.isSearching ? (
        <Box>
          <h1>Web-Scraping in progress...</h1>
          <ImageLoad src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"/>
        </Box>
      ) : (
        props.listings.map((listing) => {
          return (
            <ItemBox>
              <Image src={listing.image} />
              <Description>
                <ItemInfo>{listing.name}</ItemInfo>
              </Description>
              <Button value={listing.val} onClick={props.onAdd}>Add to Cart</Button>
              <PriceInfo>
                <Logo src={listing.logo} />
                <Price>{listing.price}</Price>
                <Button><StoreBtn href={listing.link}>Go to Store</StoreBtn></Button>
              </PriceInfo>
            </ItemBox>
          );
        })
      )}
    </Container>
  );
};

export default Listings;
