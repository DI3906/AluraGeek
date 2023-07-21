//fetch API
const listaProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());

//Crear producto
const crearProducto = (imagenUrl, categoria, nombreProducto, precioProducto, descripcion) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({imagenUrl, categoria, nombreProducto, precioProducto, descripcion, id:uuid.v4()})
    })
}

//Detalle producto
const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then( respuesta => respuesta.json());
}

//Actualizar producto
const actualizarProducto = (imagenUrl, categoria, nombreProducto, precioProducto, descripcion, id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenUrl, categoria, nombreProducto, precioProducto, descripcion}),
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

export const productoServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto,
}