document.querySelector('.lucky').onclick = function () {
    var num = document.querySelector('.inputNum').value;
    if (num.length == 6) {
        compute();
        if (fChar == lChar) {
            document.querySelector('.result').innerHTML = 'Повезло';
        } else {
            document.querySelector('.result').innerHTML = 'Не повезло';
        }
    } else {
        document.querySelector('.result').innerHTML = 'Вы ввели неверный номер!';
    }
}
function compute() {
    var fNum = num.substr(0, 3);
    var lNum = num.substr(3, 3);
    var fChar = 0;
    var lChar = 0;
    for (i = 0; i <= 5; i++) {
        if (i < 3) {
            fChar = fChar + fNum % 10;
            fNum = parseInt(fNum / 10);
        } else {
            lChar = lChar + lNum % 10;
            lNum = parseInt(lNum / 10);
        }
    }
}