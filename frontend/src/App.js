import React from 'react'
import Login from './Login/Login'
import PantallaPrincipal from './PantallaPrincipal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/PantallaPrincipal' element={<PantallaPrincipal />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App