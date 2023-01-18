function qs(selector) {
    return document.querySelector(selector);
}

qs('.solution-result').onclick = function () {
    let originalString = qs('.solution-input').value;
    /* console.log(originalString); */
    const wordsFromStrig = originalString.split(' ');
    /* console.log(wordsFromStrig); */
    /*  inputLength = wordsFromStrig.length; */
    /* console.log(inputLength); */
    let result = wordsFromStrig[0].length;
    console.log(result);
    for (let index = 0; index < wordsFromStrig.length; index++) {
        console.log(index);
        console.log(wordsFromStrig[index].length);
        console.log(result);
        if (result.length > wordsFromStrig[index].length) {
            result = wordsFromStrig[index].length;
        }

        
    }
}
