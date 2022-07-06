import styled from "styled-components";

const Container = styled.div`
  width: 85vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const GreetingBox = styled.div`
  box-sizing: border-box;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const GreetTag = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 10px;
`;

const Description = styled.div`
  font-size: 15px;
  text-align: center;
`;

const PictureBox = styled.div`
  box-sizing: border-box;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  height: 110px;
  width: 110px;
`;

const ProfileCom = (props) => {
  return (
    <Container>
      <ProfileBox>
        <PictureBox>
          <ProfilePicture src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png" />
        </PictureBox>
        <GreetingBox>
          <GreetTag>Hello, {props.user.result.name}</GreetTag>
          <Description>Welcome to your ShopHop account!</Description>
        </GreetingBox>
      </ProfileBox>
    </Container>
  );
};

export default ProfileCom;
