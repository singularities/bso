import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import AuthProvider from './components/Auth/Provider'
import Layout from './components/Layout'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

import RequireAuth from './components/Auth/Required'

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  </ChakraProvider>
)


