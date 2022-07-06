import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100%;
  height: 93.5%;
`;

const ItemBox = styled.div`
  height: 30%;
  width: 99.5%;
  box-sizing: border-box;
  display: flex;
  border: 0.5px solid lightgray;
  border-radius: 10px;
`;

const Image = styled.img`
  height: 100%;
  width: 30%;
  min-width: 30%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
`;

const Description = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 20px;
`;

const ProductName = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const EditButton = styled.button`
  box-sizing: border-box;
  height: 50%;
  width: 35%;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid grey;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const DeleteButton = styled.button`
  box-sizing: border-box;
  height: 50%;
  width: 35%;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid grey;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PriceInformation = styled.div`
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Origin = styled.div`
  font-size: 24px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ProfilePurchaseListing = (props) => {
  const navigation = useNavigate();

  return (
    <Container>
      {props.listings?.map((listing) => {
        return (
          <ItemBox>
            <Image src={listing.itemFile} />
            <Description>
              <ProductName>
                <b>Product:</b> {listing.description}
              </ProductName>
              <ButtonBox>
                <EditButton
                  onClick={() => {
                    props.setIsEdit(true);
                    props.setFormData({
                      description: listing.description,
                      price: listing.price,
                      origin: listing.origin,
                      itemFile: listing.itemFile,
                    });
                    props.setPurchaseId(listing._id);
                  }}
                >
                  <EditSharpIcon />
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={async () => {
                    await props.deletePurchase(listing._id);
                    navigation("/profile/manage");
                  }}
                >
                  <DeleteSharpIcon />
                  Delete
                </DeleteButton>
              </ButtonBox>
            </Description>
            <PriceInformation>
              <Origin>{listing.origin}</Origin>
              <Price>
                {"$" + parseFloat(listing.price.split("$")[1]).toFixed(2)}
              </Price>
            </PriceInformation>
          </ItemBox>
        );
      })}
    </Container>
  );
};

export default ProfilePurchaseListing;
