import { productoServices } from "../servicios/client-services.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imageUrl = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(imageUrl, " - ", categoria, " - ", nombre, " - ", precio, " - ", descripcion);

    productoServices.crearProducto(imageUrl, categoria, nombre, precio, descripcion).then( respuesta => {
        console.log(respuesta);
    }).catch(error => console.log(error));
});

