import { productoServices } from "../servicios/client-services.js";

const crearSeccion = (imagenUrl, nombre, precio) => {
    const item = document.createElement("div");
    const contenido = ` 
    <div class="producto__item">
        <img src="${imagenUrl}" alt="" class="producto__imagen">
        <h3 class="producto__nombre">${nombre}</h3>
        <p class="producto__precio">${precio}</p>
        <a href="" class="producto__detalles">Ver producto</a>
    </div>`

    item.innerHTML = contenido;
    return item;
}

//Variable para la seccion Star Wars
const productoTarjeta = document.querySelector('[data-seccion]');

//Variable para la seccion Consolas
const consolasTarjetas = document.querySelector('[data-seccion-consolas]');

//Variable para la sección Diversos
const diversosTarjeta = document.querySelector('[data-seccion-diversos]');


productoServices.listaProductos().then((data) =>{
    data.forEach(producto => {
        //Variable para obtener el valor de la categoria
        const categoria = producto.categoria;
        /* console.log(categoria); */
        if(categoria == "Star Wars"){
            const nuevoItem = crearSeccion(producto.imagenUrl, producto.nombreProducto, producto.precioProducto);
            productoTarjeta.appendChild(nuevoItem); 
        }else if (categoria == "Consolas") {
            const nuevoItem = crearSeccion(producto.imagenUrl, producto.nombreProducto, producto.precioProducto);
            consolasTarjetas.appendChild(nuevoItem);
        } else {
            const nuevoItem = crearSeccion(producto.imagenUrl, producto.nombreProducto, producto.precioProducto);
            diversosTarjeta.appendChild(nuevoItem);
        }
    });   
})
.catch((error) => alert("Ocurrió un error"));