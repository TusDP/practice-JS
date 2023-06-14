//=========================
///////////////\\\\\\\\\\\\
////////Модуль №1 ч.1\\\\\\\
////////////////////////////
//=========================

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);

// let students = 100;
// students += 50;
// console.log(students);

// const result = (108 + 223 - 2) * 5;
// console.log(result);



// const value = 27.49;
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));


// const name = "Artur";
// const age = 31;

// const result = name + 'years' + age;
// console.log(result);

// const c = 10 + 22 + "11" + 32;
// console.log(c);

// const a = 2 * '3';
// console.log(a);


// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);



// // Задача про індекс маси тіла метод replace()
// let weight = '88,3';
// let height = '1.75';
// // Приводимо значення weight до Number та замінюємо ',' на '.':
// weight = Number(weight.replace(',', '.'));
// height = Number(height);
// console.log(weight);
// console.log(height);

// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi);

//=========================
///////////////\\\\\\\\\\\\
////////Модуль №1 ч.2\\\\\\\
////////////////////////////
//=========================

// if (10 > 30) {
//   console.log(true);
// } else { 
//   console.log(false);
// }



// const value = 6;
// if (value > 3) {
//   console.log(`Ура!!! я ${value} більше 5!`);
// } else if (value > 5) {
//   console.log(`Ура!!! я ${value} більше 7!`);
// } else if (value > 3) {
//   console.log(`Ура!!! я ${value} більше 3!`);
// } else {
//   console.log(`Моє значення ${value} дуже маленьке =(((`);
// }

//=====================


// const value = 0;

// if (value) {
//   console.log('виконую блок if');
// } else {
//   console.log('виконую блок else');
// }

//======================


// // condition ? ex1 : ex2;
// //                      true      false
// const resul = 5 > 6 ? 'більше' : 'менше';
// console.log(resul);

//=========================

// const value = 5;

// switch (value) {
//   case 1:
//     console.log('one'); 
//     break
//   case 2:
//     console.log('two');
//     break
//   case 5: 
//     console.log('good result');
//     break
//   default:
//     console.log('default'); 
// }


//===========================


// Цикли 
//===

// =======> 'For' loop <=======

//ex #1
// for (let i = 0; i < 6; i += 1) {
//   console.log(i);
// }

//ex #2
// const str = 'hello world!'

// for (let i = 0; i < str.length; i += 1){
//   console.log(str[i]);
// }

// ======> 'While' loop <========

// const str = 'hello world'

// let i = 0;

//ex #1
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

//ex #2
// while (i < str.length) {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break
//   }
//   i += 1;
//   console.log('no', str[i]);
// }


// ======> 'Do while' loop <========

// const str = 'hello world';
// let i = 15;

// do {
//   if (str[i] === 'w') {
//         console.log('yes');
//         break
//       }
//       console.log('no');
//       i += 1;

// } while (i < str.length)

//==============================
//==============================





//Пркатичні приклади 

//Example 1
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: 
// "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript,
// то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");
// if (question === 'ECMAScript') {
//   alert('Правильно!')
// } else {
//   alert('Не знаєте? Це ECMAScript!')
// }





// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату
// "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 12;
// let timestring;

// if(minutes > 0) {
//   timestring = `${hours}г. ${minutes}хв.`;
// } else {
//   timestring = `${hours}г.`;
// }
// console.log(timestring);






// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", 
// якщо у prompt користувач ввів число більше нуля. 
// Якщо було введено нуль, виводь в консоль рядок "Це нуль". 
// Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".


// const userInput = Number(prompt("Введіть число"));
// console.log(typeof userInput);

// if (!userInput) {
//   console.log('Це нуль');
// } else if (userInput > 0) {
//   console.log('Це позитивне число');
// } else {
//   console.log('Це негативне число');
// }



//Example ## (парне непарне число)

// const userInput = Number(prompt("Введіть число"));

//var #1
// if(userInput % 2 === 0) {
//   console.log('Парне');
// } else {
//   console.log('Непарне');
// }

//var #2
// userInput % 2 === 0 ? console.log('Парне') : console.log('Непарне');
//var #3
// console.log(userInput % 2 ? 'Непарне' : 'Парне');








// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. 
// Якщо обидва значення більше 100, то виведи в консоль максимальне з них. 
// В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 20;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }









// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. 
// Якщо ні, додай до кінця значення link цей символ. 
// Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/")) {
//   link += '/'
//   console.log(link);
//   // console.log(`${link}/`); 
// }









// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. 
// Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". 
// Використовуй конструкцію if...else.

// let link = 'https://somesite-my-site.com/about';
// if (!link.endsWith("/") && link.includes("my-site")) {
//   console.log(link += '/');
// }








//Example 7 6 задача тернарним оператором
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

// let link = 'https://somesite-my-site.com/about';
// console.log(!link.endsWith("/") && link.includes("my-site") ? link += '/' : link);








// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// const hours = 25;

// if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else if (hours > 24) {
//   console.log('Overdue');  
// } else {
//   console.log('Pending');
// }










/// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 2;
// // // Пиши код нижче за цей рядок

// const daysUntilDeadline = -1;

// if (daysUntilDeadline >= 3) {
//   console.log('Дата у майбутньому');
// } else if (daysUntilDeadline == 2) {
//   console.log('Післязавтра');
// } else if (daysUntilDeadline == 1) {
//   console.log('Завтра');
// } else {
//   console.log('Сьогодні дедлайн!');
// }








// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0: console.log('Сьогодні дедлайн!');
//   break

//   case 1: console.log('Завтра');
//   break

//   case 2: console.log('Післязавтра');
//   break

//   default:
//   console.log('Дата у майбутньому');
// }










// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max,
// але тільки якщо число кратне 5.

// const min = 20;
// const max = 100;

// for (let i = min; i < max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }









// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"




// const login = prompt('тут має бути Логін');

// if (!login) {
//   console.log('Скасовано');
// } else if (login === 'Адмін') {
//   const password = prompt('тут має бути Пароль');
//   console.log(password === 'Я адмін' ? 'Доброго дня!' : 'Невірний пароль');
//   } else {
//     console.log('Я Вас не знаю =(');
//   }
