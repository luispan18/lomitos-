function validacion(values){

let error = {}

if(values.usuario === ""){
    error.usuario = "El campo no debe estar vacio"
}
else{
    error.usuario = ""
}

if(values.contrasena === ""){
    error.contrasena = "El campo no debe estar vacio"
}
else{
    error.contrasena = ""
}
return error;
}

export default validacion;