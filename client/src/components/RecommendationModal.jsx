import { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "@mui/material";

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
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
`;

const ModalBottom = styled.div`
  width: 100%;
  height: 90%;
  background-color: blue;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const RecommendationModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <ModalTopHeading>Top Items</ModalTopHeading>
          </ModalTop>
          <ModalBottom></ModalBottom>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default RecommendationModal;
