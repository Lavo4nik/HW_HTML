let button = document.querySelector('.buttonVol');
var x = document.querySelector('.height');
var y = document.querySelector('.diameter');
button.onclick = function (){
    result =  x.value * y.value;
   document.querySelector('span.volume').innerHTML = result;
}