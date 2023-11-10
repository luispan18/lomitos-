import React from 'react'
import Login from './Login/Login'
import PantallaPrincipal from './PantallaPrincipal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Ventas from './Menu/Apartados/Ventas/Ventas'
import Productos from './Menu/Apartados/Productos/Productos'
import Proveedores from './Menu/Apartados/Proveedores/Proveedores'
import Estadisticas  from './Menu/Apartados/Estadisticas/Estadisticas'
import Promociones from './Menu/Apartados/Promociones/Promociones'
import Renta from './Menu/Apartados/Renta/Renta'
import Clientes from './Menu/Apartados/Clientes/Clientes'
import Usuarios from './Menu/Apartados/Usuarios/Usuarios'
import Configuracion from './Menu/Apartados/Configuracion/Configuracion'


function App() {
  return (
    <BrowserRouter>
  <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/PantallaPrincipal' element={<PantallaPrincipal />}></Route>
        <Route path='/Ventas' element={<Ventas />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Proveedores' element={<Proveedores />} />
          <Route path='/Estadisticas' element={<Estadisticas />} />
          <Route path='/Promociones' element={<Promociones />} />
          <Route path='/Renta' element={<Renta />} />
          <Route path='/Clientes' element={<Clientes />} />
          <Route path='/Usuarios' element={<Usuarios />} />
          <Route path='/Configuracion' element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App