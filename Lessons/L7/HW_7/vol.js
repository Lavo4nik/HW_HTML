document.querySelector('.buttonVol').onclick = function () {
    x = document.querySelector('.height');
    y = document.querySelector('.diameter');
    result = x.value * y.value;
    document.querySelector('span.volume').innerHTML = result;
}