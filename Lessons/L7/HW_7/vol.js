document.querySelector('.buttonVol').onclick = function () {
    let x = document.querySelector('.height').value;
    let y = document.querySelector('.diameter').value;
    let result = x * y;
    document.querySelector('span.volume').innerHTML = "Объем " + result;
    result = 0;
}
document.querySelector('.say').onclick = function () {
    let iName = document.querySelector('.inputName');
    document.querySelector('.greeting').innerHTML = "Привіт, " + iName.value + "!";
}
document.querySelector('.buttonPer').onclick = function () {
    let x = document.querySelector('.side').value;
    //степень
    //result = Math.pow(x.value, 2);
    let result = x * 4;
    document.querySelector('span.perimetre').innerHTML = "Периметр " + result;
    result = 0;
}
document.querySelector('.buttonSpeed').onclick = function () {
    let x = document.querySelector('.distance').value;
    let y = document.querySelector('.time').value;
    let result = x / y;
    document.querySelector('span.needSpeed').innerHTML = "Необходимая скорость " + result + "км/ч";
    result = 0;
}
document.querySelector('.buttonBack').onclick = function () {
    let x = document.querySelector('.inputNum').value;
    let result = 0;
    while (x > 0) {
        rem = x % 10;
        result = result * 10 + rem;
        x = parseInt(x / 10, 10);
    }
    document.querySelector('.resultBack').innerHTML = 'результат ' + result;
}

document.querySelector('.buttonTemp').onclick = function () {
    let x = document.querySelector('.inputC').value;
    let result = x * 1.8 + 32;
    document.querySelector('.resultTemp').innerHTML = result + ' F';
}
document.querySelector('.buttonHTR-separate').onclick = function () {
    let strHex1 = document.querySelector('.inputHex1').value;
    let strHex2 = document.querySelector('.inputHex2').value;
    let strHex3 = document.querySelector('.inputHex3').value;
    strHex1 =String(strHex1);
    strHex2 =String(strHex2);
    strHex3 =String(strHex3);
    strHex1=parseInt(strHex1,16);
    strHex2=parseInt(strHex2,16);
    strHex3=parseInt(strHex3,16);
    let rgb = strHex1 + '.'+strHex2+'.'+strHex3;
    document.querySelector('.resultRGB-separate').innerHTML = 'rgb('+rgb+')';
}
document.querySelector('.buttonHTR').onclick = function () {
    let strHex = document.querySelector('.inputHex').value;
    let n = 0;
    for (let i = 0; i <= 4; i = i + 2) {
        let result = String(strHex.substr(n, 2));
        result = parseInt(result, 16);
        //result = Sting(result);
        if (n == 0) {
            var r = result;
        }
        else if (n == 2) {
            var g = result;
        }
        else if (n == 4) {
            var b = result;
        }
        n = n + 2;
    }
    var rgb = r + '.' + g + '.' + b;
    document.querySelector('.resultRGB').innerHTML = 'rgb(' + rgb + ')';
}