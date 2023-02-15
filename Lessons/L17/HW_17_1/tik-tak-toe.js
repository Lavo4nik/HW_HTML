const stol = [[9, 1, 2],
                [0, 1, 2],
                [2, 2, 2]];
/* console.log(stol); */

for (let index = 0; index < stol.length; index++) {
    let summ = '';
    for (let i = 0; i < stol[index].length; i++) {
        summ += stol[index][i];
        if (summ == '111') {
            console.log('tra');
        }
        if (summ == '222') {
            console.log('tra1');
        }

    }

}

for (let index = 0; index < stol[index].length; index++) {
    console.log('Хоп', stol[index].length);
    let summ ='';
    for (let i = 0; i < stol.length; i++) {
        summ += stol[i][index];
        if (summ == '111') {
            console.log('tra2');
        }
        if (summ == '222') {
            console.log('tra3');
        }
    }

}