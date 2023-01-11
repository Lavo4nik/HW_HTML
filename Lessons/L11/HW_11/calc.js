document.querySelector('.send').onclick = function () {
    const x = document.querySelector('.inputX').value;
    const y = document.querySelector('.inputY').value;
    document.querySelector('.result').innerHTML = (`Умножение ${x * y}     Деление ${x / y}     Вычитание ${x - y}     Сложение ${x + y}`);



}
