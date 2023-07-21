import { productoServices } from "../servicios/client-services.js";

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