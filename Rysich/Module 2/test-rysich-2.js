//=========================
///////////////\\\\\\\\\\\\
////////Модуль №2 ч.1\\\\\\\
////////////////////////////
//=========================


//   index     0      1      2     3       4
// const myArray = [1, 'Hello', null, true, [1, 2, 3]];
//             1      2      3     4       5

// console.log(Array.isArray(myArray));
//Array.isArray(myArray) - повертає  true/false  в залежності від того, чи ми працюємо з масивом чи ні


// Example "For" loop

// for(let i = 0; i < myArray.length; i += 1) {
//   if (Array.isArray(myArray[i])) {
//     for (let j =0; j < myArray[i].length; j += 1) {
//       console.log(myArray[i][j]);
//     }
//   }
//   console.log(myArray[i]);
// }




// Example "For of" loop

// for(let item of myArray) {
//   if (typeof item === 'string'){
//     item = false
//   }
// } 
// console.log('for of', myArray);

// for(let i = 0; i < myArray.length; i += 1) {
//   if (typeof myArray[i] === 'number') {
//     myArray[i] = false;
//   }
// }
// console.log('for', myArray);

// let i = 0;

// while(i < myArray.length) {
//   console.log(myArray[i]);
//   i += 1
// }


//==========[[Методи  масиву]]=========

//Split()    Join()

// const str = 'Hello world Im learning JS'

// //                  деліметр
// const arr = str.split(' '); // об'єднує стрінгу в масив
// const result = arr.reverse().join('-') // робить реверс елементів масиву, з масиву робить стрінг

// console.log(str);
// console.log(arr);
// console.log(result );


//====================

// IndexOf()     Includes()

// const arr = ['hello', 'world', 'I','learning', 'JS'];
// const indx = arr.indexOf('qdqdwq'); // перевіряє чи є даний елемент в масиві

// // як раніше робилась перевірка на вміст елементу в масиві:

// if (arr.indexOf('Phyton') === -1) {
//   console.log('NO');
// } else {
//   console.log('YES');
// }

// // як робиться зараз за допомогою includes()

// if (arr.includes('Phyton')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

//=====================



//  Методи 
//   push(+)   pop(-)  - додає та видаляє елементи вкінці масиву 
// const arr = ['hello', 'world', 'I','learning', 'JS'];

// arr.push(1, 45 ,14);
// console.log(arr);
// arr.pop()  //
// arr.pop()  // Видаляє останній елемент масиву. Не можна задати, який саме.
// arr.pop()  // Щоб видалити усі запушені числа використовуємо метод 3 рази.
// console.log(arr);

//   unshift(+)    shift(-)  - додає та видаляє елементи на початку масиву 

// arr.unshift(1, 'work',[2,3])
// console.log(arr);
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr);

// slice () - вірізає елементи з масиву, та робить копію не змінюючи оригінал. масив

// const result = arr.slice(1,3);
// console.log(result);
// console.log(arr);


// метод splice()  - універсальний метод(додає, видаляє, замінює елементи)


// arr.splice(1,0, 'from');
// console.log(arr);

// const indx = arr.indexOf('world');
// const reslt = arr.splice(indx, 1, 'Ukraine');
// console.log(arr);
// console.log('result', reslt);


// метод concat()   -  поєднує декілька масивів в один

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5,6];
// const arr3 = [7, 8];

// const result = arr1.concat(arr2, arr3);
// console.log(arr1);
// console.log(result);

//============================
//   Практичні завдання   ====
//============================


// Example #1


// const genres = ['Jazz', 'Blues'];
// // Додати в кінець масиву елемент:
// genres.push('Rock-n-Roll');
// console.log(genres);
// //Вивести в консоль перший та останній елемент масиву
// console.log(genres[0]);
// console.log(genres[genres.length -1]);
// //Видаляємо перший елемент масиву на виводим в консоль
// console.log(genres.shift());
// // Додаємо елементи на початок масиву
// genres.unshift('Country','Reggae');
// console.log(genres);


// //  За допомогою методу splice():
// const genres = ['Jazz', 'Blues'];
// // Додати в кінець масиву елемент:
// genres.splice(genres.length, 0,'Rock-n-Roll');
// console.log(genres);
// //Видаляємо перший елемент масиву на виводим в консоль:
// console.log(genres.splice(0, 1)); 
// // Додаємо елементи на початок масиву:
// genres.splice(0, 0, 'Country','Reggae');
// console.log(genres);



// Example #2

// const values = '8 11';
// const arr = values.split(' ');

// const resultS = arr[0] * arr[1];
// console.log(typeof resultS, resultS);



//Example #3

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

//var #1
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} - ${fruits[i]}`);
// }

//var #2
// for(let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

//var #3 wirh "For of" loop
// let counter = 1;
// for(fruit of fruits) {
//   console.log(counter, fruit);
//   counter++
// }




// Example 4 - Масиви та цикли
//   Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. 
//   У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. 
//   Порядковий номер імен та телефонів у рядках вказують на відповідність. 
//   Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377, 890055421458';

// names = names.split(',');
// console.log(names);
// phones = phones.split(',');
// console.log(phones);

// for (i = 0; i < names.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// }

// якщо кількість елементів у масивах не однакова, виконуємо подвійну умову:
// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377'; // як бачимо, в другому масиві тільки 3 номери, а імен 4

// names = names.split(',');
// console.log(names);
// phones = phones.split(',');
// console.log(phones);

// //                    для цього робимо подвійну умову
// //                                   |
// //                                   V 
// for (i = 0; i < names.length, i < phones.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// }




// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const strArray = string.split(' ');
// console.log(strArray);
// const newArray = strArray.slice(1, strArray.length -1);
// console.log(newArray);
// const result = newArray.join(' ');
// console.log(result);


// //рефакторинг в один рядок:
// const result = string.split(' ').slice(1, -1).join(' ');
// console.log(result);




// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';

// const result = string.split('').reverse().join('');
// console.log(result);




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// let arr = [];
// for (let i = 0; i < langs.length; i += 1) {
//   // console.log(langs[i][0]);

//   if(langs[0] > langs[i]) {
//     console.log(langs[i]);
//   }
// }
// console.log(arr);





// Example #8
// Напиши скрипт пошуку найменшого числа у масиві. 
// Код повинен працювати для будь-якого масиву чисел. 
// Використовуй цикл для розв'язання задачі.

// const numbers = [94, 298, 17, 94, 110, 23, 37, 14, 12, 25, 11];

// let minNumber = numbers[0];

// for (number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log(minNumber);

//===========
// const arr = [1,2,3] + [6,7]
// console.log(typeof arr); 





//=========================
///////////////\\\\\\\\\\\\
////////Модуль №2 ч.2\\\\\\\
////////////////////////////
//=========================


// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const arr3 = [9,10,11,12];

// function arrayMultiplication (arr) {
//   for(let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
//   console.log(arr)
// }

// arrayMultiplication(arr1)
// arrayMultiplication(arr2)
// arrayMultiplication(arr3)

//============

// ((((((((((Function declaration)))))))))))))) 

// function name (parameter){
// } 
//======

// (((((((((((((Function expression)))))))))))))

// const name = function (parameter) {

// }
//==========


// function add(val1, val2, val3, val4, val5, val6) {
//   console.log(val1 + val2 + val3 + val4 + val5 + val6);
// }

// add(1,2,3,4,5,6)
// add(1,2,3,4) 
// add(1,2,3,4,5)

// Ізза того, що аргумента 4, а параметрів функції 6, останні два будуть undefined.
// Щоб цього уникнути, треба в параметрі функції записати "arguments"

// function add() {
//   console.log(arguments);
//   let sum = 0;
//   // for(let i = 0; i < arguments.length; i += 1) {
//   //   sum += arguments[i]
//   // }

//   for (argument of arguments) {
//     sum += argument;
//   }
//   console.log(sum);
// }

// add(1,2,3,4,5,6)
// add(1,2,3,4) 
// add(1,2,3,4,5)


//========================

// можна задавати значення параметра за замовчуванням, коли не наємо точно скільки аргументів
// function add (val1, val2 = 0) {
//   return val1 + val2
// }

// console.log(add(3,4));
// console.log(add(5));
// console.log(add(11));

//========================

// let a = 10;

// function foo() {
//   a = 15
// }
// foo()
// console.log(a);

// let b = 10;

// function foo1() {
//   let b = 15;
// }

// console.log(b);
//======================================











// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. 
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після крапки;

// function calcBMI (weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(',', '.'));
//   // const bmiResult = weight / height ** 2  
//   return Number((weight / Math.pow(height, 2)).toFixed(1))
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);  //28.8




// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min (a, b) {
//   // if (a < b) {
//   //   return a
//   // } 
//   // return b

//   //за допомогою тернарного оператора:
//   return (a < b) ? a : b;  
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, 
// значення яких будуть передані до параметра dimensions у вигляді рядка. 
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   dimensions = dimensions.split(' ');
//   const resultArea = dimensions[0] * dimensions[1];
//   return resultArea;
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('46 11'));
// console.log(getRectArea('8 112'));



// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та 
// використовує цикл for, який для кожного елемента масиву 
// буде виводити в консоль повідомлення у форматі 
// <номер елемента> - <значення елемента>. 
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву 
// ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а
//  для індексу 2 - "Poly" виведе 3 - Ajax.

// function logItems(items) {
//   for (let i = 0, num = 1; i < items.length; i += 1, n += 1) {
//     console.log(`${num} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);



// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить 
// у консоль ім'я та телефонний номер користувача. 
// У параметри names та phones будуть передані рядки імен та телефонних
// номерів, розділені комами. 
// Порядковий номер імен та телефонів у рядках вказують на відповідність. 
// Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');
//   for (i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }


// printContactsInfo(
//     'Jacob,William,Solomon,Artem',
//     '89001234567,89001112233,890055566377,890055566300'
// );



// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число 
// з чисел.


// function findLargestNumber () {
//   // const arr = Array.from(arguments);
//   const arrSpread = [...arguments];

// let max = arrSpread[0];
// for (const number of arrSpread) {
//   if (number > max) {
//     max = number
//   }
// }
// return max
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12));  // 83



/////////////////////////////////
// ТРЕБА РОЗІБРАТИ ЩЕ!!!!!!//////
/////////////////////////////////


// function findLargestNumber () {
//   let max;
//   for (const element of arguments) {
//     if (typeof element === 'number') {
//       max = element;
//       break
//     }
//   }
//   for (const element of arguments) {
//     if (typeof element === 'number') {
//       if (element > max) {
//         max = element
//       }
//     } else {
//     max = findLargestNumber(...element)
//     }
//   }
//   return max
// }

// console.log(findLargestNumber([1, 1753, 7, 9], 6, 12, 4, 123, 88, 8));


// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. 
// Усі аргументи будуть лише числами.

// function calAverage() {
//   let total = 0;
//   let middle;
//   for (number of arguments) {
//     total += number;
//   }
//   middle = total / arguments.length;
//   return middle
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2



// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) 
// яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const mints = minutes % 60;
//   return `${hours.toString().padStart(2, 0)} : ${mints.toString().padStart(2, 0)}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"




// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове


const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
  if (courses.indexOf(course) === -1) {
    courses.push(course)
  } else {
    console.log('Ви вже маєте такий курс');
  }
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'


/* Варіант №1 ///
*/ ///
function removeCourse(course) {
  if (courses.includes(course)) {
    const idx = courses.indexOf(course)
    courses.splice(idx, 1);
    return
  } else {
    return "Курс із таким ім'ям не знайдено";
  }
}


/* Варіант №2 ///
*/ ///
// function removeCourse(course) {
//   const idx = courses.indexOf(course);
//   console.log(idx);
// }............................. to be continue


// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue'));; // 'Курс із таким ім'ям не знайдено'



function updateCourse(oldCourse, newCourse) {
  if (courses.includes(oldCourse)) {
    const idx = courses.indexOf(oldCourse);
    courses.splice(idx, 1, newCourse)
    return
  }
}

updateCourse('JavaScript', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
console.log(updateCourse('JavaScript', 'NestJS'));
