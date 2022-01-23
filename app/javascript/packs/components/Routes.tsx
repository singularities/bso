import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'

import RequireAuth from './Auth/Required'
import { Collections } from './Collections'


const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/"
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
