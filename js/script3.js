"use scrict";
/* 12. (д) Разница между объектами и массивами и неочевидные синтаксические возможности */
const arr = [1, 2, 3];          /* массив */
const arrObj = {
    0: 1,
    1: 2,
    2: 3
};
arrObj.b = '1234';
console.log(arr[1]);            /* обратимся к индексу 1, получим 2 */
console.log(arrObj[0]);
console.log(arrObj['b']);
/* const obj = {a: 1, b: 2};       /* объект */ 

const obj = {
    'Anna': 500,
    'Alice': 800
};


