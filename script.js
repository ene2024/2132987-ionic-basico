var articuloInput = document.getElementById("articulo");
var precioInput = document.getElementById("precio");

var articulo = '';
var monto = 0;

var total = 0;

function agregarTicket(){
    articulo = articuloInput.ariaValueMax;

    monto = parseInt(precioInput.value);

    total = total + monto;
}
