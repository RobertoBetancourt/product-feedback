// React Router
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Routes
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
// Utils
import { CustomThemeProvider } from './components/Utils/Utils'
import { LocalDatabaseProvider } from './localDatabase'

function App () {
  return (
    <LocalDatabaseProvider>
      <CustomThemeProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </CustomThemeProvider>
    </LocalDatabaseProvider>
  )
}

export default App
