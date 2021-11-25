// React Router
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Routes
import Dashboard from './components/Dashboard/Dashboard'
import ShowFeedback from './components/Feedback/ShowFeedback'
import UpsertFeedback from './components/Feedback/UpsertFeedback'
import Roadmap from './components/Roadmap/Roadmap'
// import Login from './components/Login/Login'
// Utils
import { CustomThemeProvider } from './components/Utils/Utils'
import { LocalDatabaseProvider } from './localDatabase'
import { SnackbarProvider } from 'notistack'

function App () {
  return (
    <LocalDatabaseProvider>
      <CustomThemeProvider>
        <SnackbarProvider maxSnack={3}>
          <Routes>
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/roadmap' element={<Roadmap />} />
            <Route path='add-feedback' element={<UpsertFeedback />} />
            <Route path='edit-feedback/:feedbackID' element={<UpsertFeedback />} />
            <Route path='feedback/:feedbackID' element={<ShowFeedback />} />
          </Routes>
        </SnackbarProvider>
      </CustomThemeProvider>
    </LocalDatabaseProvider>
  )
}

export default App
