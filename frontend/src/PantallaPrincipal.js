import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu/menu";

function PantallaPrincipal() {
  return (
    <div className="d-flex">
      <div className="col-auto">
        <Menu />
      </div>
      <div>
      </div>
    </div>
  );
}


export default PantallaPrincipal;
