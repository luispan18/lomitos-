import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BotonCascaron from "./BotonCascaron";
import Menu from "../../menu";
import { Link } from "react-router-dom";
import './BotonCascaronCSS.css'

function Productos() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/categorias")
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

  return (
    <div className="d-flex">
      <div className="w-auto">
        <Menu />
      </div>
      <div className="col">
        <Container fluid>
          <Row className="row-cols-auto rowPosicion">
            {categorias.map((categoria) => (
              <Link
                className="row"
                key={categoria.NombreCategoria}
                to={`/categorias/${categoria.NombreCategoria}`}
              >
                <BotonCascaron
                  key={categoria.NombreCategoria}
                  img={require(`../CategoriaImagenes/${categoria.NombreCategoria}.png`)}
                  nombre={categoria.NombreCategoria}
                />
              </Link>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Productos;
