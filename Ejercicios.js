


let edadActual = 17;
let edadMaxima = 80;
let snack = "papas fritas";
let snacksPorDia = 2;
let precioUnidad = 1000;

let cantidadFinal = (edadMaxima - edadActual) * 365 * snacksPorDia;
let gastoTotal = cantidadFinal * precioUnidad;

alert("Necesitarás " + cantidadFinal + " de " + snack + " para que te alcancen hasta los " + edadMaxima + " años.");

console.log("Gastarás en total: $" + gastoTotal);


let diasDeViaje = 10;
let presupuesto = 500000;
let comidasPorDia = 3;

let comidasTotales = diasDeViaje * comidasPorDia;
let dineroPorComida = presupuesto / comidasTotales;

alert("Podés gastar $" + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
