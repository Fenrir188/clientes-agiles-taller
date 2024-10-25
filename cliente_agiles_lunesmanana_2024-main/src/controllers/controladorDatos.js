// Preguntar a la memoria interna si tiene datos para pintar
let gastos = JSON.parse(sessionStorage.getItem("informacion")) || [];

// DOM
let fila = document.getElementById("fila");
let listaGastos = document.getElementById("listaGastos");

// Variables para las estadísticas
let totalGastos = 0;
let categorias = { transporte: 0, comida: 0, entretenimiento: 0 };

// Traversing
gastos.forEach(function(gasto) {
    // Sumar el monto del gasto
    totalGastos += parseFloat(gasto.monto);

    // Clasificar el gasto por categoría
    if (gasto.categoria in categorias) {
        categorias[gasto.categoria] += parseFloat(gasto.monto);
    }

    // Crear fila de tabla para cada gasto
    let filaGasto = document.createElement("tr");

    let celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = gasto.descripcion;

    let celdaMonto = document.createElement("td");
    celdaMonto.textContent = "$ " + parseFloat(gasto.monto).toFixed(2);

    let celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = gasto.categoria;

    let celdaFecha = document.createElement("td");
    celdaFecha.textContent = gasto.fecha;

    // Añadir celdas a la fila
    filaGasto.appendChild(celdaDescripcion);
    filaGasto.appendChild(celdaMonto);
    filaGasto.appendChild(celdaCategoria);
    filaGasto.appendChild(celdaFecha);

    // Añadir fila a la tabla
    listaGastos.appendChild(filaGasto);
});

// Crear  de estadísticas

// total de gastos
let widgetTotal = crearWidget("Total Gastos", "$ " + totalGastos.toFixed(2), "bi-wallet");

// Widget de transporte
let widgetTransporte = crearWidget("Gastos en Transporte", "$ " + categorias.transporte.toFixed(2), "bi-truck");

// Widget de comida
let widgetComida = crearWidget("Gastos en Comida", "$ " + categorias.comida.toFixed(2), "bi-cup-straw");

// Widget de entretenimiento
let widgetEntretenimiento = crearWidget("Gastos en Entretenimiento", "$ " + categorias.entretenimiento.toFixed(2), "bi-music-note-list");

// Agregar  a la fila
fila.appendChild(widgetTotal);
fila.appendChild(widgetTransporte);
fila.appendChild(widgetComida);
fila.appendChild(widgetEntretenimiento);

// Función para crear los widgets del dashboard
function crearWidget(titulo, valor, icono) {
    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "card-custom", "h-100", "p-4", "text-center");

    let iconoElem = document.createElement("i");
    iconoElem.classList.add("bi", icono, "icon-dashboard");

    let valorElem = document.createElement("h2");
    valorElem.classList.add("stat-value");
    valorElem.textContent = valor;

    let tituloElem = document.createElement("p");
    tituloElem.classList.add("stat-label");
    tituloElem.textContent = titulo;

    
    tarjeta.appendChild(iconoElem);
    tarjeta.appendChild(valorElem);
    tarjeta.appendChild(tituloElem);
    columna.appendChild(tarjeta);

    return columna;
}
