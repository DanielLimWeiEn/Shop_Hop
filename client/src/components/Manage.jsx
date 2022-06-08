import styled from "styled-components";
import FileBase from "react-file-base64";

import ProfileManageListing from "./ProfileManageListing";

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
`;

const FormHolder = styled.div`
  height: 100%;
  width: 35%;
  border: 1px solid;
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
  gap: 70px;
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
`

const Manage = (props) => {
  return (
    <Container>
      <ItemHolder>
        <ItemHeading>Purchases</ItemHeading>
        <ProfileManageListing listings={props.purchases.data?.purchases} />
      </ItemHolder>
      <FormHolder>
        <ItemHeading>CRUD</ItemHeading>
        <Form>
          <InputAndLabel>
            <InputLabel>Description:</InputLabel>
            <FormInput id="description" name="description" />
          </InputAndLabel>

          <InputAndLabel>
            <InputLabel>Price:</InputLabel>
            <FormInput id="price" name="price" />
          </InputAndLabel>

          <InputAndLabel>
            <InputLabel>Origin:</InputLabel>
            <FormInput id="origin" name="origin" />
          </InputAndLabel>

          <FileInput>
            <InputLabel>Image of Item:</InputLabel>
            <FileBase type="file" multiple={false} />
          </FileInput>

          <FormSubmit>Submit</FormSubmit>
        </Form>
      </FormHolder>
    </Container>
  );
};

export default Manage;
