import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100%;
  height: 87%;
  background-color: white;
  padding: 12px 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 23%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
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
  width: 75%;
  font-size: 14px;
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

const ProfilePurchaseListing = (props) => {
  return (
    <Container>
      {props.listings?.map((listing) => {
        return (
          <ItemBox>
            <Image src={listing.itemFile} />
            <Description>
              <ItemInfo>{listing.description}</ItemInfo>
              <PriceInfo>
                {"$" + parseFloat(listing.price.split("$")[1]).toFixed(2)}
              </PriceInfo>
            </Description>
            {/* <Description>
              <ItemInfo>{listing.description}</ItemInfo>
            </Description>
            <PriceInfo>
              <Price>{listing.origin}</Price>
              <Price>{listing.price}</Price>
            </PriceInfo> */}
          </ItemBox>
        );
      })}
    </Container>
  );
};

export default ProfilePurchaseListing;
