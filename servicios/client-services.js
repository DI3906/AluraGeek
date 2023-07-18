//fetch API
const listaProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());

//Crear producto
const crearProducto = (imageUrl, categoria, nombre, precio, descripcion) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({imageUrl, categoria, nombre, precio, descripcion, id:uuid.v4()})
    })
}

export const productoServices = {
    listaProductos,
    crearProducto,
}