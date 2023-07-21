import { productoServices } from "../servicios/client-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null){
        window.location.href = "../screen/error.html"
    }

    const imageUrl = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    productoServices.detalleProducto(id).then(producto => {
        imageUrl.value = producto.imagenUrl;
        categoria.value = producto.categoria;
        nombre.value = producto.nombreProducto;
        precio.value = producto.precioProducto;
        descripcion.value = producto.descripcion;
    });
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imageUrl = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServices.actualizarProducto(imageUrl, categoria, nombre, precio, descripcion, id).then(() =>{
        window.location.href = "../screen/exito.html"
    });
})