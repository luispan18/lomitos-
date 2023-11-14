import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../../menu";
import {} from "react-bootstrap";
import "./BotonCascaronCSS.css";
import BotonCascaron from "./BotonCascaron";
import imagenes from "./imagenes"

function Categoria() {
  const { categoria } = useParams();
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/categorias/${categoria}/marcas`)
      .then((response) => response.json())
      .then((data) => setMarcas(data))
      .catch((error) => console.error("Error al obtener marcas:", error));
  }, [categoria]);

  const normalizarNombre = (nombre) => {
    return nombre.toLowerCase().replace(/ /g, '_').replace(/[^\w\s]/gi, '');
  };  
  
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Menu />
      </div>
      <div className="col">
        <div className="container-fluid">
          <div className="row row-cols-auto rowPosicion">
            {marcas.map((marca) => ( 
          <BotonCascaron
             key={marca.NombreMarca}
             img={imagenes[normalizarNombre(marca.NombreMarca)]}
             nombre={marca.NombreMarca}
            />
           
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoria;
