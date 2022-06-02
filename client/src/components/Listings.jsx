import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  overflow-y: scroll;
  width: min(90%, 1500px);
  height: 100vh;
`;

const ItemBox = styled.div`
  height: 100px;
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  margin-left: 20px;
  height: 80px;
  width: 80px;
`;

const Description = styled.div`
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const ItemInfo = styled.span`
  font-size: 15px;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img`
  height: 20px;
  width: 40px;
`;

const Price = styled.span`
  font-size: 15px;
`;

const StoreBtn = styled.a`
  background-color: orange;
  border-radius: 5px;
  font-weight: 600;
`;

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Listings = (props) => {
  return (
    <Container>
      {props.isSearching ? (
        <Box>
          <h1>Web-Scraping in progress</h1>
          <CircularProgress />
        </Box>
      ) : (
        props.listings.map((listing) => {
          return (
            <ItemBox>
              <Image src={listing.image} />
              <Description>
                <ItemInfo>{listing.name}</ItemInfo>
              </Description>
              <PriceInfo>
                <Logo src={listing.logo} />
                <Price>{listing.price}</Price>
                <StoreBtn href={listing.link}>Go to Store</StoreBtn>
              </PriceInfo>
            </ItemBox>
          );
        })
      )}
    </Container>
  );
};

export default Listings;
