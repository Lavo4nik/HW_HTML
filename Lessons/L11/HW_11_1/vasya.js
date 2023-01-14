function qs(selector) {
    return document.querySelector(selector);
}
qs('.result-line').onclick = function () {
    let x = qs('.salary').value;
    let y = qs('.ill').value;
    qs('.result-line').innerText = (`${(x + y) / 50 * 100} строк`);
}
/* !спросить  */
qs('.result-line').onclick = function () {
    x = qs('.2-lines').value;
    y = qs('.2-salary').value;
    qs('.2-result').innerText = (`${(x + y) / 50 * 100} строк`);
}
qs('.result-3').onclick = function () {
    let x = qs('.lines-3').value;
    let y = qs('.salary-3').value;
    res = (x / 100) * 50 - (y * 20);
    console.log(res);
    if (res > 0) {
        qs('.result-3').innerText = (`Доход ${res}`);
    }
    else
        qs('.result-3').innerText = (`Останеться должен ${res} $`);
}