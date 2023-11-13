const imagenes = {};

const importarImagenes = require.context("./imgMarcas", false, /\.(png|jpe?g|gif|svg)$/);
importarImagenes.keys().forEach((ruta) => {
  const nombre = ruta.replace(/^\.\/(.*)\.\w+$/, "$1");
  imagenes[nombre] = importarImagenes(ruta);
});

export default imagenes;
