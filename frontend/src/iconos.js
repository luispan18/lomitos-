const iconos = {};

const importarIconos = require.context("./iconos", false, /\.(png|jpe?g|gif|svg)$/);
importarIconos.keys().forEach((ruta) => {
  const nombre = ruta.replace(/^\.\/(.*)\.\w+$/, "$1");
  iconos[nombre] = importarIconos(ruta);
});

export default iconos;
