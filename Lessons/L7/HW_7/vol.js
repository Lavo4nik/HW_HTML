document.querySelector('.buttonVol').onclick = function () {
    x = document.querySelector('.height');
    y = document.querySelector('.diameter');
    result = x.value * y.value;
    document.querySelector('span.volume').innerHTML = "Объем " + result;
    result = 0;
    newFunction();
}
document.querySelector('.say').onclick = function () {
    iName = document.querySelector('.inputName');
    document.querySelector('.greeting').innerHTML = "Привіт, " + iName.value + "!";
}
document.querySelector('.buttonPer').onclick = function () {
    x = document.querySelector('.side');
    //степень
    //result = Math.pow(x.value, 2);
    result = x.value * 4;
    document.querySelector('span.perimetre').innerHTML = "Периметр " + result;
    result = 0;
}
document.querySelector('.buttonSpeed').onclick = function () {
    x = document.querySelector('.distance');
    y = document.querySelector('.time');
    result = x.value / y.value;
    document.querySelector('span.needSpeed').innerHTML = "Необходимая скорость " + result + "км/ч";
    result = 0;
}