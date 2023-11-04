import React from 'react'
import Login from './Login/Login'
import PantallaPrincipal from './PantallaPrincipal'
import Ventas from './Menu/Apartados/Ventas/Ventas'
import Productos from './Menu/Apartados/Productos/Productos'
import Proveedores from './Menu/Apartados/Proveedores/Proveedores'
import Estadisticas  from './Menu/Apartados/Estadisticas/Estadisticas'
import Promociones from './Menu/Apartados/Promociones/Promociones'
import Renta from './Menu/Apartados/Renta/Renta'
import Clientes from './Menu/Apartados/Clientes/Clientes'
import Usuarios from './Menu/Apartados/Usuarios/Usuarios'
import Configuracion from './Menu/Apartados/Configuracion/Configuracion'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
    <div className="col-auto">
    <PantallaPrincipal/>
    </div>
  <div>
  <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/PantallaPrincipal' element={<PantallaPrincipal />}></Route>
        <Route path='/Ventas' element={<Ventas />}></Route>
        <Route path='/Productos' element={<Productos />}></Route>
        <Route path='/Proveedores' element={<Proveedores />}></Route>
        <Route path='/Estadisticas' element={<Estadisticas />}></Route>
        <Route path='/Promociones' element={<Promociones />}></Route>
        <Route path='/Renta' element={<Renta />}></Route>
        <Route path='/Clientes' element={<Clientes />}></Route>
        <Route path='/Usuarios' element={<Usuarios />}></Route>
        <Route path='/Configuracion' element={<Configuracion />}></Route>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App