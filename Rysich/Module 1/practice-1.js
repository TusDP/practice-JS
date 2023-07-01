//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;

// if (a == 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }





//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 60;

// if (min <= 15 && min > 0) {
//   console.log(`Число "${min}" попадає в першу чверть.`);
// } else if (min > 15 && min <= 30) {
//   console.log(`Число "${min}" попадає в другу чверть.`);
// } else if (min > 30 && min <= 45) {
//   console.log(`Число "${min}" попадає в третю чверть.`);
// } else if (min > 45 && min < 60) {
//   console.log(`Число "${min}" попадає в четверту чверть.`);
// } else {
//   console.log(`Число "${min}" не попадає в жодну чверть.`);

// }





//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 4;
// let result;
// switch (num) {
//   case 1: 
//     result = 'зима';
//     break
//   case 2:
//     result = 'весна';
//     break
//   case 3:
//     result = 'літо';
//     break
//   case 4:
//     result = 'осінь';
//     break
//   default:
//     console.log("невірні параметри запиту!");
// }

// console.log(result);







//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let counter = 0;

// while (counter < 50) {
//   counter += 1;
//   console.log('Counter', counter);
// }


//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка «офіційна» назва JavaScript?").toLowerCase();

// alert(question === "ecmascript" ? "Вірно!" : "Не знаєте? ECMAScript!");





//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин 70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


// const globalMins= 65;

// const hours = String(Math.floor(globalMins / 60)).padStart(2, 0);
// const minutes = String(Math.floor(globalMins % 60)).padStart(2, 0);

// console.log(`${hours} : ${minutes}`);








//                   (*)
//TODO: 7 =================================== 
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 10;
// const max = 85;

// let pairedNumbers = 0;
// for (let i = max; i > min ; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//     pairedNumbers += i; 
//   }
// }
// console.log(pairedNumbers);










//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Добрий день, шановний Адмін!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
// інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');

// if (loginInput === "Адмін") {
//   const passwordInput = prompt('Введіть свій пароль')
//   if (!passwordInput) {
//     alert("Скасовано");
//   } else if (passwordInput === "Я головний") {
//     alert("Добрий день, шановний Адмін!")
//   } else {
//     alert("Невірний пароль!");
//   }
//   } else if (!loginInput || 'Escape') {
//   alert('Я вас не знаю =(');
// }









//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір 
// символів, не потрібно.



// Варіант №1 додає числа, які введені за один раз в інпуті при натисканні ОК
// const numberInput = prompt('Буль-ласка введіть число'); 
// let total = 0;

// if (!null) {
//   const individualNumbers = numberInput.split('');
//   for (let i = 0; i < individualNumbers.length; i += 1) {
//     total += Number(individualNumbers[i]);
//   } 
// }
//   alert(`Загальна сума введених чисел дорівнює ${total}`)



// Варіант №2 додає числа, які введені через "OK"
// let total = 0;

// while(true) {
//   const numberInput = prompt('Буль-ласка введіть число'); 
  // if (numberInput === null) {
  //   break
  // }
//   const number = parseFloat(numberInput);
//   total += number; 
// }
  
// alert("Сума чисел: " + total);








//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt


// const input = prompt('Введіть число більше 100...');

// if (input <= 100) {
//   alert('Введене число не відповідає умові. Введіть число більше за 100!');
// } else {
//   alert(`Вітаю! Число ${input} відповідає заданим параметрам`);
// }

// let input;
// do {input = prompt('Введіть число більше 100...')
// } while (input <= 100 && input !== null)

// if (input === null) {
//   alert('Введення скасовано.');
// } else {
//   alert(`Вітаю! Число ${input} відповідає заданим параметрам.`);
// }











//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';
// if (str[0] === 'a') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }









//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const mainNumber = parseInt(prompt('Введіть число:'))
// if (isNaN(mainNumber)) {  //isNaN, щоб переконатися, що введене значення є дійсним числом
//   console.log('Введіть коректне число!');
// } else if (mainNumber % 3 === 0 && mainNumber % 5 === 0) {
//   console.log('fizzbuzz');
// } else if(mainNumber % 5 === 0) {
//   console.log('buzz');
// } else if (mainNumber % 3 === 0) {
//   console.log('fizz');
// } else {
//   console.log('wrong number(((');
// }









//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }
////////////////
// REFACTOR/////
////////////////
// const browser = 'Edge';

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if 
//   (browser === 'Opera' 
//     || browser === 'Chrome' 
//     || browser === 'Firefox'
//     || browser === 'Safari') {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }









//TODO: 14 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']


// function fillArray (quantity, item) {
//   let arr = [];
//   for (let i = 0; i < quantity; i += 1) {
//     arr.push(item)
//   }
//   return arr
// }

// console.log(fillArray(5, 'b'));






//TODO: 15 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const items = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];


// function clearArray (array) {
//   let newClearedArray = [];
//   for (let item of array) {
//     if (item) {
//       newClearedArray.push(item)
//     }   
//   }
//   return newClearedArray
// }

// console.log(clearArray(items));




//TODO: 16 ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];


// function compareArray (array1, array2) {
//  if (array1.length !== array2.length) {
//   return false
//  }

//  for(let i = 0; i < array1.length; i += 1) {
//   if (array1[i] !== array2[i]) {
//     return false
//   }
//  }
//  return true
// }

// console.log(compareArray(arr2, arr8));


