import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import iconos from "../iconos";
import "./menu.css";

function Menu() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081/Verificacion")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.usuario);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div className="d-flex flex-column justify-content-between p-4 vh-100 pantalla menu-fijo">
      <div>
        <div className="nombreUsuario">
          <div className="iconoUsuarioContainer">
            <img src={iconos.perfil} alt="#" className="iconoUsuario" />
          </div>
          <div className="nombreInfoContainer">
            
              <strong className="fs-2">Lomito</strong>
            
            <span  className="fs-5 " >{name}</span>
          </div>
        </div>
        <br />
        <ul className="nav nav-pills flex-column ">
          <li className="nav-item ">
            <Link to="/PantallaPrincipal" className="nav-link titulosmenu">
              <img src={iconos.hogar} alt="" className="inicio iconos" />
              <span className="fs-5  ">Inicio</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Ventas" className="nav-link titulosmenu">
              <img src={iconos.zakat} alt="" className="iconos" />
              <span className="fs-5">Ventas</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Productos" className="nav-link titulosmenu">
              <img src={iconos.regalo} alt="" className="iconos" />
              <span className="fs-5">Productos</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Proveedores" className="nav-link titulosmenu">
              <img src={iconos.repartidor} alt="" className="iconos" />
              <span className="fs-5">Proveedores</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Estadisticas" className="nav-link titulosmenu">
              <img src={iconos.estadisticas} alt="" className="iconos" />
              <span className="fs-5">Estadísticas</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Promociones" className="nav-link titulosmenu">
              <img src={iconos.promocion} alt="" className="iconos" />
              <span className="fs-5">Promociones</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Renta" className="nav-link titulosmenu">
              <img src={iconos.alquilar} alt="" className="iconos" />
              <span className="fs-5">Renta</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Clientes" className="nav-link titulosmenu">
              <img src={iconos.clientes} alt="" className="iconos" />
              <span className="fs-5">Clientes</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Usuarios" className="nav-link titulosmenu">
              <img src={iconos.usuarios} alt="" className="iconos" />
              <span className="fs-5">Usuarios</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/Configuracion" className="nav-link titulosmenu">
              <img src={iconos.configuraciones} alt="" className="iconos" />
              <span className="fs-5">Configuración</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
