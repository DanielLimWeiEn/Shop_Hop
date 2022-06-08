import styled from "styled-components";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ProfileManageListing from "./ProfileManageListing";
import { addPurchase, updatePurchase, deletePurchase } from "../api";

const Container = styled.div`
  box-sizing: border-box;
  width: 85vw;
  height: 100vh;
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const ItemHolder = styled.div`
  height: 100%;
  width: 65%;
  border: 1px solid;
  box-shadow: 10px 10px rgb(245, 250, 253);
`;

const FormHolder = styled.div`
  height: 100%;
  width: 35%;
  border: 1px solid;
  box-shadow: 10px 10px rgb(245, 250, 253);
`;

const ItemHeading = styled.div`
  font-size: 25px;
  color: white;
  padding-left: 20px;
  padding-top: 5px;
  background-color: purple;
  height: 40px;
`;

const Form = styled.form`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const InputAndLabel = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 80%;
  font-size: 20px;
`;

const InputLabel = styled.label`
  font-size: 20px;
`;

const FileInput = styled.div`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;

const FormSubmit = styled.button`
  width: 100%;
  height: 7%;
  font-size: 20px;
`;

const ErrorMessage = styled.div`
  font-size: 15px;
  color: red;
  text-align: center;
`;

const initialState = {
  description: "",
  price: "$",
  origin: "",
  itemFile: "",
};

const Manage = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const [purchaseId, setPurchaseId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.description === "" ||
      formData.itemFile === "" ||
      formData.origin === "" ||
      formData.price === ""
    ) {
      setErrorMessage("Please Include All Fields");
      return;
    }

    let action;
    if (isEdit) {
      action = await updatePurchase(purchaseId, formData);
    } else if (!isEdit) {
      action = await addPurchase(formData);
    }

    console.log(action?.data);

    setFormData(initialState);
    setIsEdit(false);
    setPurchaseId(null);
    setErrorMessage("");

    navigation("/profile/manage");
  };

  return (
    <Container>
      <ItemHolder>
        <ItemHeading>Purchases</ItemHeading>
        <ProfileManageListing
          listings={props.purchases.data?.purchases}
          deletePurchase={deletePurchase}
          setFormData={setFormData}
          setIsEdit={setIsEdit}
          setPurchaseId={setPurchaseId}
        />
      </ItemHolder>
      <FormHolder>
        <ItemHeading>CRUD</ItemHeading>
        <Form onSubmit={handleSubmit}>
          <InputAndLabel>
            <InputLabel>Description:</InputLabel>
            <FormInput
              onChange={handleChange}
              id="description"
              name="description"
              value={formData.description}
            />
          </InputAndLabel>

          <InputAndLabel>
            <InputLabel>Price ($):</InputLabel>
            <FormInput
              onChange={handleChange}
              id="price"
              name="price"
              value={formData.price}
            />
          </InputAndLabel>

          <InputAndLabel>
            <InputLabel>Origin:</InputLabel>
            <FormInput
              onChange={handleChange}
              id="origin"
              name="origin"
              value={formData.origin}
            />
          </InputAndLabel>

          <FileInput>
            <InputLabel>Image of Item:</InputLabel>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...formData, itemFile: base64 })
              }
            />
          </FileInput>
          {errorMessage !== "" && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <FormSubmit type="submit">Submit</FormSubmit>
        </Form>
      </FormHolder>
    </Container>
  );
};

export default Manage;
