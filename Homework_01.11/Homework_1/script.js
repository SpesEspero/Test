//Дан массив чисел. Нужно написать функцию, которая найдет непрерывный подмассив (содержащий как минимум одно число) с наибольшей суммой элементов и вернет эту сумму.
//
//Пример:
//
//Входной массив: [-2,1,-3,4,-1,2,1,-5,4]
//Ответ: 6
//Обоснование: Подмассив [4,-1,2,1] имеет наибольшую сумму элементов.


let arr = [-2,1,-3,4,-1,2,1,-5,4];
let max = arr[0];
let sum;

for (let i = 0; i < arr.length; i++) {
    sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        sum += arr[j];
        if (sum > max) {
            max = sum;
        }
    }
}

if (max < 0){
    console.log('Отрицательное значение')
}
else{
    console.log(max);
}
