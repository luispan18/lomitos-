import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import iconos from "./iconos";
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
    <div className="d-flex flex-column pantalla">
     <div className="nombreUsuario">
  <div className="iconoUsuarioContainer">
    <img src={iconos.perfil} alt="#" className="iconoUsuario" />
  </div>
  <div className="nombreInfoContainer">
    <h5><strong>LOMITO</strong></h5>
    <span className="fs-5">{name}</span>
  </div>
</div>
<br />
<ul className="nav nav-pills flex-column ">
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.hogar} alt="" className="inicio iconos" />
            <span className="fs-5">Inicio</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.zakat} alt="" className="iconos" />
            <span className="fs-5">Ventas</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.regalo} alt="" className="iconos" />
            <span className="fs-5">Productos</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.repartidor} alt="" className="iconos" />
            <span className="fs-5">Proveedores</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.estadisticas} alt="" className="iconos" />
            <span className="fs-5">Estadísticas</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.promocion} alt="" className="iconos" />
            <span className="fs-5">Promociones</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.alquilar} alt="" className="iconos" />
            <span className="fs-5">Renta</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.clientes} alt="" className="iconos" />
            <span className="fs-5">Clientes</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.usuarios} alt="" className="iconos" />
            <span className="fs-5">Usuarios</span>
        </a>
    </li>
    <li className="nav-item ">
        <a href="" className="nav-link titulosmenu">
            <img src={iconos.configuraciones} alt="" className="iconos" />
            <span className="fs-5">Configuración</span>
        </a>
    </li>
  

</ul>
    </div>
  );
}

export default Menu;
