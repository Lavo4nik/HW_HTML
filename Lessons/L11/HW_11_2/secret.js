function qs(selector) {
    return document.querySelector(selector);
}
qs('.result').onclick = function () {
    let place = qs('.mesto').value;
    if (place < 54 && place > 0) {
        const number_coupe = place <= 36 ? Math.trunc((place - 1) / 4 + 1) : Math.trunc((54 - place) / 2 + 1);
        const up_bottom = place % 2 == 0 ? 'Верхняя' : 'Нижняя';
        qs('.result').innerText = `Ваше купе ${number_coupe} ${up_bottom} полка `;
    }
    else
        qs('.result').innerText = 'Вы путушествуете на крыше';
}