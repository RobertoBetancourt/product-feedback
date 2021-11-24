// React Router
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Routes
import Dashboard from './components/Dashboard/Dashboard'
import ShowFeedback from './components/Feedback/ShowFeedback'
import UpsertFeedback from './components/Feedback/UpsertFeedback'
// import Login from './components/Login/Login'
// Utils
import { CustomThemeProvider } from './components/Utils/Utils'
import { LocalDatabaseProvider } from './localDatabase'

function App () {
  return (
    <LocalDatabaseProvider>
      <CustomThemeProvider>
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/' element={<Dashboard />} />
          <Route path='add-feedback' element={<UpsertFeedback />} />
          <Route path='feedback/:feedbackID' element={<ShowFeedback />} />
        </Routes>
      </CustomThemeProvider>
    </LocalDatabaseProvider>
  )
}

export default App
