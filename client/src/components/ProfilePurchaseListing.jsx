import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 87%;
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
  align-items: center;
  width: min(90%, 1200px);
  height: 100px;
  margin-left: 20px;
`;

const ItemInfo = styled.span`
  font-size: 20px;
  font-weight: 600;

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

const Price = styled.span`
  font-size: 19px;
`;

const ProfilePurchaseListing = (props) => {
  return (
    <Container>
      {props.listings?.map((listing) => {
        return (
          <ItemBox>
            <Image src={listing.itemFile} />
            <Description>
              <ItemInfo>{listing.description}</ItemInfo>
            </Description>
            <PriceInfo>
              <Price>{listing.origin}</Price>
              <Price>{listing.price}</Price>
            </PriceInfo>
          </ItemBox>
        );
      })}
    </Container>
  );
};

export default ProfilePurchaseListing;