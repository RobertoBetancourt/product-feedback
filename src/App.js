// React Router
import { Routes, Route } from 'react-router-dom'
// Routes
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
// Utils
import { CustomThemeProvider } from './components/Utils/Utils'

function App () {
  return (
    <CustomThemeProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </CustomThemeProvider>
  )
}

export default App
