var titulo = document.getElementById("diaOferta")
var fecha = new Date()
var dia = fecha.getDay()

if(dia == 3){
    titulo.innerText = "Hoy miercoles 20% de descuento en todas las frutas"
}