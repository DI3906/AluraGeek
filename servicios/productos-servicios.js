//GET
//con funcion anonima 7:48
const listaProductos = () => {
    fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

export const productosServicios = {
    listaProductos
}