//botón contador y reset//
var btnElm = document.getElementById ('btnclick');
var btnReset = document.getElementById ('btnreset');
var pElm = document.getElementById ('contarclick');
var contar = 0;
btnElm.onclick = function (){
    contar++;
    pElm.textContent = contar;
}
btnReset.onclick =function () {
    pElm.textContent =0;
    contar = 0;
}
//hasta aquí, botón contador y reset//

