import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import FrontPage from '../pages/Front'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'
import ParticipantsPage from '../pages/Participants'

import AuthRequired from './Auth/Required'
import AuthlessRequired from './Auth/AuthlessRequired'
import { Collections } from './Collections'
import Layout from './Layout'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={
      <Container my='8'>
        <AuthlessRequired />
      </Container>
    }>
      <Route index element={<FrontPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
    <Route path="/home" element={
      <AuthRequired>
        <Collections>
          <Layout />
        </Collections>
      </AuthRequired>
    }>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="participants"
        element={<ParticipantsPage />}
      />
    </Route>
  </Routes>
)

export default AppRoutes
