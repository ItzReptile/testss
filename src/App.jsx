import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Info from './pages/Info'
import Scannig from './pages/Scannig'
import Demographics from './pages/Demographics'
import Select from './pages/Select'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/info' element={<Info />} />
        <Route exact path='/scanning' element={<Scannig />} />
        <Route exact path='/select' element={<Select />} />
        <Route exact path='/demographics' element={<Demographics />} />
      </Routes>

    </Router>
  )
}

export default App

