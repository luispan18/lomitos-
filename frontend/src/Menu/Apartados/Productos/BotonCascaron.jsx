import './BotonCascaronCSS.css';
import React from 'react';

function BotonCascaron({ img, nombre }) {
    return (
        <div className='BotonCascaron'>
            <div className="imagen-container">
                <img src={img} alt="Imagen 1" className="imagen" />
            </div>
            <div>
                <button className="boton">{nombre}</button>
            </div>
        </div>
    );
}

export default BotonCascaron;
