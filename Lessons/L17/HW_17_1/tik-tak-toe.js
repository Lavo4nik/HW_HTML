const stol = [[9, 7, 2], [0, 1, 2], [2, 1, 0]];
let summ = 0;
for (let index = 0; index < stol.length; index++) {
    for (let ind = 0; ind < stol[index][ind].length; ind++) {
        summ = summ + stol[index][ind];
        console.log(summ);
    }
}