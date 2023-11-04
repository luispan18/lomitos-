

import React, { useState, useEffect} from 'react';


import './Login.css';
import validacion from './LoginValidation.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login()  {
  const [values, setValues] = useState({
    usuario: '',
    contrasena: ''
  });

const navigate = useNavigate();
const[errors, setErrors] = useState({});
const [error, setError] = useState('');
const [backendError, setBackendError] = useState([])

const handleInput = (event) => {
  setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

axios.defaults.withCredentials = true;

useEffect(() => {
  axios
    .get("http://localhost:8081/Verificacion")
    .then((res) => {
      if (res.data.valid) {
        navigate('/PantallaPrincipal')
      } else {
        navigate("/");
      }
    })
    .catch((err) => console.log(err));
}, [navigate]);


const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validacion(values);
    setErrors(validationErrors);
    if (Object.values(validationErrors).every((error) => error === "")) {
      axios
        .post('http://localhost:8081/Login', values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError([]);
            if (res.data.Login) {
              console.log(res.data.Login);
              navigate('/PantallaPrincipal');
            } else {
              console.log(res.data.Login);
              setError('Usuario o contraseña incorrectos');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }

return(
  <div className="login">
     <div className="login-imagen-container">
    <div className="login-imagen" />
    </div>
    <div className="login-formulario-container">
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
      <div className="Titulo-container">
        <h2 className="Titulo">INICIO DE SESIÓN</h2>
        {
          backendError ? backendError.map( e => (
            <p className='text-danger'>{e.msg}</p>
          ) ) : <span></span>
        }
        <h3 className='Tipo-usuario'>Administrador</h3>
      </div>
        <label  htmlFor="usuario" className="Label-usuario" ><strong>Usuario</strong></label>
        <input type="text" placeholder="Usuario" id='usuario' name='usuario'
        onChange={handleInput} className="form-control rounded-0" />
        {errors.usuario && <span className='text-danger' > {errors.usuario}</span>}
        <label htmlFor="contrasena" className='Label-contrasena'><strong>Contraseña</strong></label>
        <input type="password" placeholder="Ingresa contraseña" id='contrasena' name='contrasena' 
        onChange={handleInput} className="form-control rounded-0" />
        {errors.contrasena && <span className='text-danger' > {errors.contrasena}</span>}
      </div>
      <div className='Boton-container'>
         {error && <span className='text-danger'>{error}</span>}
      <button type="submit" className="Boton">Iniciar sesión</button>
      </div>
    </form>
    </div>
    </div>
)
}

export default Login;