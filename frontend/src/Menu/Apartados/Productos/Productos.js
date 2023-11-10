import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BotonCascaron from "./BotonCascaron";
import Menu from "../../menu";
import Alimento from "../CategoriaImagenes/Alimentos.png";
import Limpieza from "../CategoriaImagenes/Limpieza.png"
import Accesorios from "../CategoriaImagenes/Accesorios.png"
import Renta from "../CategoriaImagenes/Renta.png"
import Premios from "../CategoriaImagenes/Premios.png"

function Productos() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <Menu />
            </div>
            <div className='col'>
                <Container fluid>
                    <Row className="row row-cols-auto" style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
                        <BotonCascaron img={Alimento} nombre="Alimento" />
                        <BotonCascaron img={Limpieza} nombre="Limpieza" />
                        <BotonCascaron img={Accesorios} nombre="Accesorios" />
                        <BotonCascaron img={Renta} nombre="Renta" />
                        <BotonCascaron img={Premios} nombre="Premios" />
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Productos;
