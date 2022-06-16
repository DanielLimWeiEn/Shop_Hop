import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShortcutIcon from "@mui/icons-material/Shortcut";

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  width: min(98%, 1500px);
  height: 100%;
  background-color: white;
  padding: 12px 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`;

const ImageCover = styled.div`
  transition: 0.5s;
  height: 90%;
  width: 100%;
  opacity: 0;
  background-color: rgb(255, 255, 255, 0.3);
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const ItemBox = styled.div`
  transition: 0.3s;
  height: min(340px, 320px);
  width: 23%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  position: relative;

  &:hover ${ImageCover} {
    opacity: 1;
  }

  &:hover {
    box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    transform: scale(1.09);
  }
`;

const Description = styled.div`
  box-sizing: border-box;
  padding: 5px;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemInfo = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  width: 68%;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PriceInfo = styled.div`
  box-sizing: border-box;
  padding-right: 6px;
  height: 100%;
  width: 20%;
  text-align: right;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
`;

const LogoBox = styled.div`
  box-sizing: border-box;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 40%;
  width: 60%;
`;

const IconBox = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid;
  background-color: transparent;
  cursor: pointer;

  &:active {
    color: rgb(255, 255, 255);
  }
`;

const ButtonLink = styled.a`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid;
  background-color: transparent;
  text-decoration: none;
  color: black;

  &:active {
    color: rgb(255, 255, 255);
  }
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.img`
  height: 300px;
  width: 450px;
`

const Listings = (props) => {
  return (
    <Container>
      {props.isSearching ? (
        <LoadingBox>
          <h1>Web-Scraping in progress...</h1>
          <LoadingImage src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"/>
        </LoadingBox>
      ) : (
        props.listings.map((listing) => {
          return (
            <ItemBox>
              <Image src={listing.image} />
              <ImageCover>
                <LogoBox>
                  <Logo src={listing.logo} />
                </LogoBox>
                <IconBox>
                  <Button onClick={(event) => props.onAdd(listing.val)}>
                    <ShoppingCartIcon style={{ fontSize: "30px" }} />
                  </Button>
                  <ButtonLink href={listing.link}>
                    <ShortcutIcon style={{ fontSize: "30px" }} />
                  </ButtonLink>
                </IconBox>
              </ImageCover>
              <Description>
                <ItemInfo>{listing.name}</ItemInfo>
                <PriceInfo>{listing.price}</PriceInfo>
              </Description>
            </ItemBox>
          );
        })
      )}
    </Container>
  );
};

export default Listings;
