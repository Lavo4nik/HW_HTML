document.querySelector('.send').onclick = function () {
    var x = document.querySelector('.inputX').value;
    var y = document.querySelector('.inputY').value;
    document.querySelector('.result').innerHTML = (`Умножение ${x * y}     Деление ${x / y}     Вычитание ${x - y}     Сложение ${x + y}`);



}
