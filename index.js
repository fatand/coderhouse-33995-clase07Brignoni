/* DESAFIO CLASE 7 - MATIAS BRIGNONI */

/* 
Este script hace que desde el navegador mediante alerts se presente una tienda online donde el usuario debe responder a preguntas acerca de la compra de un producto y en funcion de su respuesta le calcula el costo total de la compra. 

Luego de finalizada la compra. El script permite que el usuario consulte si un producto se encuentra en el catálogo de productos.
*/
function Producto(info){
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.peso = info.peso;
};

let producto1 = new Producto({
    nombre: "Buzo",
    precio: 3100,
    peso: 0.400
});

let producto2 = new Producto({
    nombre: "Remera",
    precio: 1000,
    peso: 0.150
});

let producto3 = new Producto({
    nombre: "Short",
    precio: 1500,
    peso: 0.100
});

const catalogo = [producto1, producto2, producto3];

alert(`Bienvenidos a la tienda online!
        La lista de productos es:
        Producto - Precio - Peso
        ${catalogo[0].nombre} - $ ${catalogo[0].precio} - ${catalogo[0].peso}kg
        ${catalogo[1].nombre} - $ ${catalogo[1].precio} - ${catalogo[1].peso}kg
        ${catalogo[2].nombre} - $ ${catalogo[2].precio} - ${catalogo[2].peso}kg
        
        El costo de envio es de $400/kg.`);

const respuesta = [];

// Con este for, se pregunta si se quiere comprar los productos. Las respuestas se agregan al arreglo "respuesta".
for (let index = 0; index < catalogo.length; index++) {
    let comprarProducto1 = prompt(`¿Quiere comprar el producto ${catalogo[index].nombre} a $ ${catalogo[index].precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();
    while ((comprarProducto1 != "si") && (comprarProducto1 != "no")) {
        comprarProducto1 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${catalogo[index].nombre}.`);
    }    
    respuesta.push(comprarProducto1);
}

function compra() {
    let carrito = 0;
    let peso = 0;
    let productosCarrito=[];
    for (let index = 0; index < catalogo.length; index++) {
        if (respuesta[index] === "si"){
            carrito = carrito + catalogo[index].precio;
            peso = peso + catalogo[index].peso;
            productosCarrito.push(catalogo[index]); //Arreglo que contiene los productos del carrito. Aún no se ha utilizado el arreglo.
        }
    }

    let costoEnvio = peso * 400;
    let costoTotal = carrito + costoEnvio;

    if (carrito != 0) {
        alert(`Resumen de la compra
                Subtotal - $ ${carrito}
                Envío - $ ${costoEnvio}
                --------------------------
                Total - $ ${costoTotal}`);
        alert("Fin de la compra.");
    } else {
        alert("Dado que no ha agregado ningún producto a su carrito, usted no ha realizado ninguna compra. Gracias por su tiempo.")
    }

    // Buscar producto en catálogo mediante array.find y una arrow function

    let productoEnCatalogo = prompt("Indique que producto quiere saber si se encuentra en el catálogo.");

    let encontrado = catalogo.find(item => item.nombre === productoEnCatalogo);

    if (encontrado === undefined) {
        alert(`El producto ${productoEnCatalogo} no se encuentra en el catálogo.`);  
    }else{
        alert(`El producto ${productoEnCatalogo} se encuentra en el catálogo.`);  
    }

    // FIN Buscar producto en catálogo

}

compra();