document.querySelector('.buttonVol').onclick = function () {
    x = document.querySelector('.height').value;
    y = document.querySelector('.diameter').value;
    result = x * y;
    document.querySelector('span.volume').innerHTML = "Объем " + result;
    result = 0;
}
document.querySelector('.say').onclick = function () {
    iName = document.querySelector('.inputName');
    document.querySelector('.greeting').innerHTML = "Привіт, " + iName.value + "!";
}
document.querySelector('.buttonPer').onclick = function () {
    x = document.querySelector('.side').value;
    //степень
    //result = Math.pow(x.value, 2);
    result = x*4;
    document.querySelector('span.perimetre').innerHTML = "Периметр " + result;
    result = 0;
}
document.querySelector('.buttonSpeed').onclick = function () {
    x = document.querySelector('.distance').value;
    y = document.querySelector('.time').value;
    result = x/y;
    document.querySelector('span.needSpeed').innerHTML = "Необходимая скорость " + result + "км/ч";
    result = 0;
}
document.querySelector('.buttonBack').onclick = function () {
    x = document.querySelector('.inputNum').value;
    let result = 0;
    while (x > 0) {
        rem = x % 10;
        result = result * 10 + rem;
        x = parseInt(x / 10, 10);
    }
    document.querySelector('.resultBack').innerHTML = 'результат ' + result;
}

document.querySelector('.buttonTemp').onclick = function () {
    x = document.querySelector('.inputC').value;
    result = x*1.8 +32;
    document.querySelector('.resultTemp').innerHTML = result + ' F';
} 

/* var hexString = 'f3';

    let n = parseInt(hexString, 16);
    console.log(n);
 */

    strHex ='f3e4a0';
strHex = strHex.split("\\S{3}");
console.log(strHex);
/*     while(i>0){

    } */