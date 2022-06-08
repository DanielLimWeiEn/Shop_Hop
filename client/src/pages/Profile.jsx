import styled from 'styled-components'
import React from 'react'
import { useNavigate, Link, Routes, Route } from 'react-router-dom'
import History  from '../components/History'
import Manage from '../components/Manage'
import ProfileCom from '../components/ProfileCom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: felx;
`

const Side = styled.div`
    width: 15vw;
    height:100vh;
    background-color: red;
`



const Profile = () => {
  return (
    <Container>
        <Side/>
        <Routes>
            <Route path="/" element={<ProfileCom/>}/>
            <Route path="/history" element={<div>This is GET /history/</div>}/>
            <Route path="/manage" element={<Manage/>} />
        </Routes>
    </Container>
  )
}

export default Profile;
