/*
alert("HI-))");
alert("HI-))");
 */
/*     let message = "Banda!";
    console.log(message); */
//let (var- устаревшее) - определение переменной.
//camelCase - принцип наименования
/*  var staroe;
 let V;
 let Pi = 3.14;
 let R = 10;
 V = Pi*R; */
//console.log() - вывод чего то в лог
/*  console.log(V); */
//Константы
/*  const T = 20;
 console.log(T); */

/* let V; */
//const - константа.
/* const Pi = 3.14;
let H = 2;
let r = 4;
V =Pi*(r*r)*H;
console.log(V); */

// Типы данных
/* let x = 10; // number
let x = 10n; // bigint
let x = "hello"; // string
let x = true; // boolean
let x = null; //null
let x = undefined; // undefined
let x = {} // object
let x = Symbol("test"); //symbol */
//typeof - оператор, определяющий тип данных в переменной
/* let $Y = null;
console.log(typeof $Y); */

//Литерал - значение, присвоенное непосредственно в коде
//Template literal - используется для создания строки на основе шаблона и значений, определенных в переменных или являющихся результатом выражений.
/* let firstName ="Raccoon";
let secondName= "UA"; */
//Конкатенация
/* let fullNameK = "Привет меня зовут " + firstName + secondName;
console.log(fullNameK); */
//Template literal
/* let fullName = `Привет меня зовут ${firstName}${secondName}`;
console.log(fullName); */

//Преобразование типов данных
/* let value = 212;
let newValueOld = Boolean (value); // приведение типа к Boolean
let newValue = value.toString(); // приведение типа к строке
console.log(newValueOld + 1);
console.log(Boolean(newValue + 1)); //приведение типа к Boolean */

//Функция promt - функция для отображения модального окна с текстом и полем для ввода текста. Возвращвет текст который ввел пользователь или null.
/* let valuePromtX = prompt("Введите ширину", "Плэйсхолдер");
let valuePromtY = prompt("Введите длину", "Плэйсхолдер");
let valuePromtXY = Number(valuePromtX*valuePromtY);
alert(`Площадь ${valuePromtXY}`);
console.log(`Площадь ${valuePromtXY}`); */

// Префикс постфикс
/* let prefix =10;
console.log(--prefix);
console.log(++prefix);
let postfix =100;
console.log(++postfix);
console.log(--postfix);
console.log(--postfix);
console.log(postfix--);
console.log(postfix); */


//Сокращенная арифметика
/* let X =10;
X -= 10;
alert(`"X -= 10; "${X}`);
X *=20;
alert(`"X +=20;"  ${X}`); */


//Опреаторы сравнения

/* let valueX = 10;
let valueY = 15;
let result;

result = valueX>valueY;
result = valueX<valueY;
result = valueX==valueY; // true. Если значения разных типов, происходит их конвертация
result = valueX===valueY; // false. Если значения разных типов, НЕ происходит конвертация и false сразу при разных типах.
result = valueX!=valueY;
result = valueX<=valueY;
result = valueX>=valueY; */

//if
/* let answer = prompt("Введите пароль");
if (Number(answer) === 3548) {
    alert("ПОЗДРАВЛЯЕМ!");
}
else if (Number(answer) > 3548) {
    alert("Значение меньше")
}
else {
    alert("Досвидания)")
} */

//Логические операции
// && - and.
// || - or.
// ! - not

//Подтверждение. Используется окно подтверждения браузера .
/* let confermed = confirm("Approval"); */

// Switch. Оператор множественного выбора.
/* let dayNumber = prompt("Day of week?");
switch (dayNumber) {
    case "1":
        alert("first")
        break;
    case "2":
        alert("second")
        break;
    default:
        alert("Мимо")
        break;
} */

//Тернарный оператор.
/* let a =10;
let msg = a<10 || a==10 ? "True": "False";
alert(msg); */

// Циклы

// while цикл с предусловием. Выполняется пока условие true
/* let i =1;
while (i<10) {
    console.log("Iteration #" + i);
    i+=2;
    
} */




//do while - цикл с постусловием. Выполняется аока условие true. Условие проверяется после тела.

/* let i =0;
do {
    i++;
    console.log("Iteration #" + i);
} while (i < 5); */

//for - цикл со счетчиком

/* for (let X = 0; X < 10; X++) {
    console.log("iteration#" + X)
    
} */
//FOR без первого условия
/* let X = 0ж
for (; X < 10; X++) {
    console.log("iteration#" + X)
    
} */
//FOR без двух условий
/* let X = 0ж
for (; X < 10;) {
    console.log("iteration#" + X)
    X++
} */

/* let start = 2;
let end =8;
let sum =0;
for (i = start; i < end; i++){
   sum +=i;

}
console.log(`${sum}`); */

//Массивы. Массивы в JS являются объектами.

/* let array =[]; //пустой массив
let cities = ["london","paris",true]; // массив с данными
cities[1]= 'ABC'; //перезаписать элемент массива
cities[3]= "Kyiv"; // добавит запись в массив
let value = cities[1]; //присваивает значение массива переменной
console.log(cities);
console.log(value); */

//Длина массива
/* let cities = ["london","paris","Pano","Nope"];
console.log(cities.length); //lenght - свойство массива, которое возвращает количество элементов
cities[4] = "Lisabon"
console.log(cities.length);
cities[10]= "Madrid";
console.log(cities.length);
cities.length = 6; // установление длины массива. все выходящие за заданную длину удаляются.
console.log(cities.length); */

/* let cities = ["london","paris","Pano","Nope"];
cities[4] = "Add element";
for (let index =0 ;index<cities.length; index++) {
    const element = cities[index] 
    console.log(element);
}

for(let city of cities) { //let city - переменная в которую будут записываться значения массива, до тех пор пока в масииве есть элементы.
    console.log(city);
} */
// Поиск максимального значения масива
/* let values =[10,15,4,6,11,9,125,1,8,0,3];
let max = Number.MIN_VALUE;
//console.log(max);
for (let index =0; index<values.length; index++){
    const element = values[index];
    if (element>max){
        max= element;
    }
    
}
console.log(max); */

/* let values =[10,15,4,6,11,9,125,1,8,0,3];
let maximum = 0;
for (let summ of values){
        if (maximum < summ){
        maximum =summ;
    }
}
console.log(maximum); */

//МЕТОДЫ МАССИВОВ

//push/pop
//pop - удаляет последний элемент массива и возвращает его. 
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
let last =cities.pop();
console.log(cities , last); */
//push - метод. который добавляет указанное значение в конец массива
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
cities.push("Something");
console.log(cities);  */

//shift/unshift
//shift -метод который удаляет первый элемент массива и возвращает его
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
let first = cities.shift(); // cities.shift();
console.log(cities) */
//unshift - метод который добавляет первый элемент массива
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
cities.unshift("Something");
console.log(cities) */

//splice - метод для удаления определенных значений и добавления других значений вместо.
//splice (start, deleteCount,items ...)
//start - индексЮ начиная с которого необходимо производить действия
//deleteCount - количество элементов для удаления
// items - значения, для добавления в массивЮ вместо удаленных
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
cities.splice(2, 0, "Coco","secondCoco")
console.log(cities); */

//slice(start,end) - метод, который возвращает новый массив, в который копирует элементы от start до end (не включая end)
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"] 
let city = cities.slice (0,2);
console.log(city);
console.log(cities); */

//concat - метод, который создает новый массив, объединяя существующие.
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo"]
let characters = ["a","b","c","d","f","g"]
let values = cities.concat(characters, "first","second","third"); //к массиву cities добавь массив characters и значения "first","second","third" 
console.log(values); */

//indexOf - метод ищет элемент  с начала массива и указанным значением в массиве и возвращает его индекс или -1(при отсутствии)
//massive.indexOf("What need fide", x) x - с какого индекса необходимо начинать поиск.
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo","Kyiv"]
let index =cities.indexOf("Kyiv",2)
console.log(index); */
//lastIndexOf - аналог indexOf, но ищет с окончания массива.
/* let cities = ["Paris","Kyiv","Amsterdam", "Oslo","Kyiv"]
let index =cities.lastIndexOf("Kyiv",10)
console.log(index); */

//split -создание массива на основе строки используя Заданный символ"," в качестве разделителя.
/* let str = "value1 - value2- 3- 0 "
let values =str.split('-'); //задаем разделитель
console.log(values); */
