// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const carta = document.querySelector("#productos-container")

const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "./img/id1.jpg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "./img/id 2.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "./img/id 3.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null || "./img/id 4.jpg",
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "./img/id 5.jpg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "./img/id 6.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "./img/id 7.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "./img/id 8.jpg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null || "./img/id 9.jpg",
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "./img/id 10.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

function generarTarjetas(productos) {
    const tarjetasHtml = productos.reduce((acc, producto) => {
        const tarjeta = `
            <div class="tarjeta">
                    <img src="${producto.imagen || "imagen no disponible"}" alt="componente de pc" </img>
                <div class="info">
                    <h2> ${producto.producto} </h2>    
                    <p> ${producto.descripcion || "sin descripcion"} </p>
                    <span> ${producto.precio} </span>
                    <span> ${producto.marca} </span>
                    <button class="button" id="${producto.id}"> Agregar al carrito </button>
                </div>
            </div>
        `
        return acc + tarjeta
    }, "")
    carta.innerHTML = tarjetasHtml
}
generarTarjetas(productos)


let botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click", (producto) => {
        let idBoton = producto.target.id;
        let productoSeleccionado = productos.find(producto => producto.id == idBoton);
        localStorage.setItem("productoSeleccionado", JSON.stringify(productoSeleccionado));
    });
});

