import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {UseRoutes} from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/Auth.context'
import { Navbar } from './components/Navbar'
import './index.css'

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = UseRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Navbar/> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider> 

  )
}

export default App;
