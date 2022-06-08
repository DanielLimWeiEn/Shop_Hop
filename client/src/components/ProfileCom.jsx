
import styled from "styled-components"

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
   display:flex;
   align-items: center;
   justify-content: center;
`

const ProfileBox =styled.div`
   width: 400px;
   height: 300px;
   display: flex;
   flex-direction: column;
   justify-content:center;
   background-color:rgba(255, 255, 255, 0.5)
`
const GreetTag = styled.h1`
    font-size:30px;
    text-align: center;
    padding-bottom: 10px;
`

const Description = styled.h2`
   font-size: 15px;
   text-align: center;
`

const ProfileCom = () => {
  return (
    <Container>
      <ProfileBox>
          <GreetTag>Hello, </GreetTag>
          <Description>This is filler Description pretty cool huh?</Description>
      </ProfileBox>
    </Container>
  )
}

export default ProfileCom
