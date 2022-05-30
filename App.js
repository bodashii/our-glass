import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './src/components/LandingPage'
import LoginPage from './src/components/LoginPage'
import RegisterPage from './src/components/RegisterPage'
import ForgetPasswordPage from './src/components/ForgetPasswordPage'
import HomePage from './src/components/HomePage'

import './src/components/App.css'

export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}