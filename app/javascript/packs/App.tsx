import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import './adapter'

import AuthProvider from './components/Auth/Provider'
import Layout from './components/Layout'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'

import RequireAuth from './components/Auth/Required'
import { Collections } from './components/Collections'

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
      </Routes>
    </AuthProvider>
  </ChakraProvider>
)


