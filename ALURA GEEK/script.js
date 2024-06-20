/*// Base de datos local de productos
const productos = {
    "Amortentia Bouquet": { precio: '80.000', imagen: "Imagenes/Ramo1.png" },
    "Winter Bouquet": { precio: '100.000', imagen: "Imagenes/Ramo2.png" },
    "Flora Bouquet": { precio: '50.000', imagen: "Imagenes/Ramo3.png" },
    "Summer Bouquet": { precio: '60.000', imagen: "Imagenes/Ramo4.png" },
    "Breeze Bouquet": { precio: '60.000', imagen: "Imagenes/Ramo5.png" },
    "Spring Bouquet": { precio: '70.000', imagen: "Imagenes/Ramo6.png" },
    "Sunny Day Bouquet": { precio: '90.000', imagen: "Imagenes/Ramo7.png" },
    "Rosetta Bouquet": { precio: '100.000', imagen: "Imagenes/Ramo8.png" },
    "Fresh Air Bouquet": { precio: '50.000', imagen: "Imagenes/Ramo5.png" }
};

// Evento para el botón Enviar
document.getElementById('enviar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    if (productos[nombre]) {
        const producto = productos[nombre];

        // Crear un nuevo elemento de producto
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('ramo');
        
        // Crear imagen
        const imgElement = document.createElement('img');
        imgElement.src = producto.imagen;
        
        // Crear nombre y precio
        const nombreElement = document.createElement('h3');
        nombreElement.textContent = nombre;
        const precioElement = document.createElement('h4');
        precioElement.textContent = `$ ${producto.precio}`;
        
        // Añadir ícono de carrito
        const iconElement = document.createElement('box-icon');
        iconElement.setAttribute('name', 'basket');
        
        // Añadir elementos al nuevo producto
        nuevoProducto.appendChild(imgElement);
        nuevoProducto.appendChild(nombreElement);
        nuevoProducto.appendChild(precioElement);
        nuevoProducto.appendChild(iconElement);
        
        // Añadir el nuevo producto a la lista
        document.querySelector('.carritoCompras').appendChild(nuevoProducto);
        
        // Limpiar el campo de texto
        document.getElementById('nombre').value = '';
    } else {
        alert('Producto no encontrado');
    }
});

// Evento para el botón Limpiar
document.getElementById('limpiar').addEventListener('click', function() {
    // Limpiar el campo de texto
    document.getElementById('nombre').value = '';
    // Limpiar el contenido del carrito
    document.querySelector('.carritoCompras').innerHTML = '';
});*/

// Base de datos local de productos
const productos = {
    "Amortentia Bouquet": { precio: '80.000' , imagen: "Imagenes/Ramo1.png" },
    "Winter Bouquet": { precio: '100.000' , imagen: "Imagenes/Ramo2.png" },
    "Flora Bouquet": { precio: '50.000' , imagen: "Imagenes/Ramo3.png" } ,
    "Summer Bouquet": {precio: '60.000' , imagen: "Imagenes/Ramo4.png" } ,
    "Breeze Bouquet": {precio: '60.000' , imagen: "Imagenes/Ramo5.png"} ,
    "Spring Bouquet": {precio: '70.000' , imagen: "Imagenes/Ramo6.png"} ,
    "Sunny Day Bouquet": {precio: '90.000' , imagen: "Imagenes/Ramo7.png"} ,
    "Rosetta Bouquet": {precio: '100.000' , imagen: "Imagenes/Ramo8.png"} ,
    "Fresh Air Bouquet": {precio: '50.000' , imagen: "Imagenes/Ramo5.png"} 
};

// Evento para el botón Enviar
document.getElementById('enviar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    if (productos[nombre]) {
        const producto = productos[nombre];

        // Crear un nuevo elemento de producto
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('ramo');
        
        // Crear imagen
        const imgElement = document.createElement('img');
        imgElement.src = producto.imagen;
        
        // Crear nombre y precio
        const nombreElement = document.createElement('h3');
        nombreElement.textContent = nombre;
        const precioElement = document.createElement('h4');
        precioElement.textContent = `$ ${producto.precio}`;
        
        // Añadir ícono de carrito
        const iconElement = document.createElement('box-icon');
        iconElement.setAttribute('name', 'basket');
        
        // Añadir elementos al nuevo producto
        nuevoProducto.appendChild(imgElement);
        nuevoProducto.appendChild(nombreElement);
        nuevoProducto.appendChild(precioElement);
        nuevoProducto.appendChild(iconElement);
        
        // Añadir el nuevo producto a la lista
        document.querySelector('.carritoCompras').appendChild(nuevoProducto);
        
        // Limpiar el campo de texto
        document.getElementById('nombre').value = '';
    } else {
        alert('Producto no encontrado');
    }
});

// Evento para el botón Limpiar
document.getElementById('limpiar').addEventListener('click', function() {
    // Limpiar el campo de texto
    document.getElementById('nombre').value = '';
});
