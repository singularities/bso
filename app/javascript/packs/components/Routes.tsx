import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import FrontPage from '../pages/Front'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'

import RequireAuth from './Auth/Required'
import { Collections } from './Collections'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/home"
      element={
        <RequireAuth>
          <Collections>
            <HomePage />
          </Collections>
        </RequireAuth>
      }
    />
  </Routes>
)

export default AppRoutes
