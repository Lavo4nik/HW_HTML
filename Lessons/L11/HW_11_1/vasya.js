function qs(selector) {
    return document.querySelector(selector);
}
qs('.result-line').onclick = function () {
    let x = qs('.salary').value;
    let y = qs('.ill').value;
    qs('.result-line').innerText = (`${(x + y) / 50 * 100} строк`);
}
/* Подигрываю разработчику, округляю в большую=) */
qs('.result-2').onclick = function () {
    let x = qs('.lines-2').value;
    let y = qs('.salary-2').value;
    let res = Math.round((y - (x / 100 * 50)) / 20);
    if (res > 0) {
        qs('.result-2').innerText = (`В запасе ${res}  опозданий`);
    }
    else
        qs('.result-2').innerText = 'У Вас нет возможности опаздывать';
}
qs('.result-3').onclick = function () {
    let x = qs('.lines-3').value;
    let y = qs('.salary-3').value;
    res = (x / 100) * 50 - (y * 20);
    if (res > 0) {
        qs('.result-3').innerText = (`Доход ${res}`);
    }
    else
        qs('.result-3').innerText = (`Останеться должен ${res} $`);
}