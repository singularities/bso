import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import FrontPage from '../pages/Front'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'

import AuthRequired from './Auth/Required'
import AuthlessRequired from './Auth/AuthlessRequired'
import { Collections } from './Collections'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AuthlessRequired><FrontPage /></AuthlessRequired>} />
    <Route path="/login" element={<AuthlessRequired><LoginPage /></AuthlessRequired>} />
    <Route path="/register" element={<AuthlessRequired><RegisterPage /></AuthlessRequired>} />
    <Route
      path="/home"
      element={
        <AuthRequired>
          <Collections>
            <HomePage />
          </Collections>
        </AuthRequired>
      }
    />
  </Routes>
)

export default AppRoutes
