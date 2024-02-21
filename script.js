var articuloInput = document.getElementById("articulo");
var precioInput = document.getElementById("precio");

var articulo = '';
var monto = 0;

var total = 0;

const seccionTicket = document.getElementById("ticket");

function agregarTicket(){
    articulo = articuloInput.ariaValueMax;

    monto = parseInt(precioInput.value);

    total = total + monto;

    let elementoTicket.innerHTML =  articulo + '................ $ ' + monto;
}
