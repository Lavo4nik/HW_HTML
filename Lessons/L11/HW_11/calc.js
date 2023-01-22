function qs(selector) {
    return document.querySelector(selector);
}

qs('.send').onclick = function () {
    let x = parseInt(qs('.inputX').value);
    let y = parseInt(qs('.inputY').value);
    qs('.result').innerText = (`Умножение ${x * y}     Деление ${x / y}     Вычитание ${x - y}     Сложение ${x + y}`);
}
