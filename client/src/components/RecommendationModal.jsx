import { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "@mui/material";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  background-color: white;
  border: 1px solid grey;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const ModalTop = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 10px 40px;
  display: flex;
  align-items: center;
`;

const ModalTopHeading = styled.h2`
  font-weight: 200;
  font-size: 36px;
`;

const ModalBottom = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 90%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const ModalProductWrapper = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
`;

const ModalProductNumber = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;

const ModalProduct = styled.div`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  border: 0.5px solid lightgray;
  border-radius: 10px;
`;

const ModalProductDetail = styled.div`
  display: flex;
  height: 100%;
  width: 45%;
`;

const ModalImage = styled.img`
  height: 100%;
  width: 30%;
  min-width: 35%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
`;

const Details = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalProductName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalPriceDetail = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ModalProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ModalProductRating = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const RecommendationModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const topThreeItems = props.listings
    .map((x) => x)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={handleOpen}
        style={{
          fontSize: 18,
          backgroundColor: "white",
          color: "black",
          textTransform: "none",
          border: "1px solid #e580ff",
        }}
      >
        Recommendations
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalTop>
            <ModalTopHeading>Top 3 items</ModalTopHeading>
          </ModalTop>
          <ModalBottom>
            {topThreeItems.map((item, index) => {
              return (
                <ModalProductWrapper>
                  <ModalProductNumber>{index + 1}</ModalProductNumber>
                  <ModalProduct>
                    <ModalImage src={item?.image} />
                    <ModalProductDetail>
                      <Details>
                        <ModalProductName>
                          <b>Product:</b>
                          {" " + item?.name}
                        </ModalProductName>
                      </Details>
                    </ModalProductDetail>
                    <ModalPriceDetail>
                      <ModalProductRating>
                        {item?.rating.toFixed(1)}{" "}
                        <StarRateSharpIcon fontSize="small" />
                      </ModalProductRating>
                      <ModalProductPrice>
                        $ {parseFloat(item?.price.split("$")[1]).toFixed(2)}
                      </ModalProductPrice>
                    </ModalPriceDetail>
                  </ModalProduct>
                </ModalProductWrapper>
              );
            })}
          </ModalBottom>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default RecommendationModal;
