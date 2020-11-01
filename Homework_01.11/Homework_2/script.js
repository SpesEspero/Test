//Дан массив чисел (prices), в котором i-ый элемент это цена данной акции в i-ый день. Нужно написать функцию, которая вычисляет максимальную возможную прибыль брокера, если он может купить или продать одну акцию в любой день сколько угодно раз, но он обязан продать акцию до того, как купит следующую (в любой момент времени у него не более одной акции).   [1, 8, 5, 3, 7, 2, 10, 1, 2, 3, 4, 5]  [7,1,5,3,6,4, 2, 7, 6, 5, 1, 2]   [7,1,5,3,6,4]
//Ограничения:
//1 <= prices.length <= 3 * 10 ^ 4
//0 <= prices[i] <= 10 ^ 4




////
////Идея заключается в следующем: сначала вычисляем разность для каждого из дней, для удобства состовляем двумерный массив.
//Далее из полученного массива для каждого из чисел пытаюсь найти возможный заработок, те мы учитываем, что до продажи купить новую акцию нельзя.

//К сожалению алгоритм не до конца доработан и не срабатывет для каждого массива. В тех массивах, что даны нам в качестве примера ответ получается правильным.


const arr = [7,1,5,3,6,4];
let max;
let maxsum = [];
//Создаю двумерный массив


let diff = [];
for (let i = 0; i < arr.length - 1; i++) {
    diff[i] = [];
}
//Нахожу разность между днями
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        for (let k = 0; k < i; k++) {
            diff[i][k] = 0;
        }
        diff[i][j] = arr[j + 1] - arr[i];
        if (diff[i][j] < 0) {
            diff[i][j] = 0;
        }
    }
}


//Нахожу возможные суммы заработка
let c = 0;
for (let h = 0; h < diff.length; h++) {
    let underNumb;
    for (let i = 0; i < diff.length; i++) {
        let mainAm = diff[i][h];
        if (mainAm === 0) {
            continue;
        }
        else {
            maxsum[c] = mainAm;
        }
        let p;
        if (h > i) {
            p = h;
        }
        else {
            p = i;
        }
        for (let m = p + 2; m < diff.length; m++) {
            for (let t = p + 2; t < diff.length; t++) {
                underNumb = diff[t][m];
                if (underNumb === 0) {
                    t--;
                    m++;
                    continue;
                }
                else {
                    if (underNumb === undefined) {
                        break;
                    }
                    else {
                        let z;
                        if (t > m) {
                            z = t;
                        }
                        else {
                            z = m;
                        }
                        if (z + 2 >= diff.length) {
                            maxsum[c] += underNumb;
                            c++;
                            maxsum[c] = mainAm;
                        }
                        else {
                            maxsum[c] += underNumb;
                            for (j = z + 2; j < diff.length; j++) {
                                for (k = z + 2; k < diff.length; k++) {
                                    underNumb = diff[k][j]
                                    if (underNumb === 0) {
                                        k--;
                                        j++;
                                        continue;
                                    }
                                    else {
                                        if (underNumb === undefined) {
                                            j = z + 2;
                                            continue;
                                        }
                                        else {
                                            maxsum[c] += underNumb;
                                            j = j + 2;
                                            k = j - 1;
                                        }
                                    }
                                }
                                c++;
                                maxsum[c] = mainAm + diff[t][m];
                            }
                        }
                    }
                }
            }
        }
        c++;
    }
}



max = maxsum[0];
if (maxsum[0] === undefined) {
    max = 0;
}
//Максимальный заработок
for (let i = 0; i < maxsum.length; i++) {
    if (maxsum[i] === NaN, undefined) {
        continue;
    }
    else {
        if (max < maxsum[i]) {
            max = maxsum[i];
        }
    }
}



console.log(diff);/*Вывод массива с разностью*/

console.log(maxsum);/*Вывод массива, который находит все варианты*/


if (max === 0) { /*Вывод наибольшего значения*/
    console.log('Ничего не покупаем и не продаем, так что выгода = 0.')
}
else {
    console.log(max);
}
