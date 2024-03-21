var articuloInput = document.getElementById("articulo");
var precioInput = document.getElementById("precio");

var articulo = '';
var monto = 0;
var total = 0;

const seccionTicket = document.getElementById("ticket");

function agregarTicket(){
    
    articulo = articuloInput.value;
    monto = parseInt(precioInput.value);

    total = total + monto;

    var elementoTicket = document.createElement("p");

    elementoTicket.textContent =  articulo + '................ $ ' + monto;

    seccionTicket.appendChild(elementoTicket);
}
