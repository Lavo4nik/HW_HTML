document.querySelector('.lucky').onclick = function () {
    const num = document.querySelector('.inputNum').value;
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
    const fNum = num.substr(0, 3);
    const lNum = num.substr(3, 3);
    const fChar = 0;
    const lChar = 0;
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