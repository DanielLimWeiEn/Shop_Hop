import styled from 'styled-components'
import React from 'react'
import { useNavigate, Link, Routes, Route } from 'react-router-dom'
import History  from '../components/History'
import Manage from '../components/Manage'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Profile = () => {
  return (
    <Container>
        <ul>
        <li><Link to="/profile/">Employees</Link></li>
        <li><Link to="/profile/history">history</Link></li>
        <li><Link to="/profile/manage">manage</Link></li>
      </ul>
        <Routes>
            <Route path="/" element={<div>This is GET /profile/</div>}/>
            <Route path="/history" element={<div>This is GET /history/</div>}/>
            <Route path="/manage" element={<Manage/>} />
        </Routes>
    </Container>
  )
}

export default Profile;
