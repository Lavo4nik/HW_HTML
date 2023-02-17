const stol = [[1, 1, 0], [0, 1, 2], [2, 0, 2]];
for (let index = 0; index < stol.length; index++) {
    let summ = '';
    for (let i = 0; i < stol[index].length; i++) {
        summ += stol[index][i];
        score(summ);
    }
}
for (let index = 0; index < stol[index].length; index++) {
    let summ = '';
    for (let i = 0; i < stol.length; i++) {
        summ += stol[i][index];
        score(summ);
    }
}
function score(summ) {
    if (summ == '111') {
        console.log('Winner X');
        return;
    }
    if (summ == '222') {
        console.log('Winner O');
    }

}