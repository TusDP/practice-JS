// ! Arrays and function
//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const arrayOfNumbers = [20, 5, 35, 56, 12, 24, 7, 80, 3];

//? Answer

// function findSmallerNumber(numbers) {
//   let theSmallestNumber = numbers[0];
//   if (!Array.isArray(numbers)) {
//     alert('Error! Передане значення не є масивом!')
//     }

//     for (let number of numbers) {
//       if (number < theSmallestNumber) {
//         theSmallestNumber = number
//       }
//   }
//   return theSmallestNumber
// }

// console.log(findSmallerNumber(arrayOfNumbers))

//?







//TODO:=========task-2=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.


//? Answer
// function calculateAverage() {

//   // Робимо перевірку на передачу хочаб одного аргументу ф-ції:
//   if (arguments.length === 0) {
//     console.log('Помилка! Введіть хочаб одне число для розрахунку.');
//   }

//   let totalAmmount = 0;

//   for (let argument of arguments) {
//     // Перевіряємо, чи є аргумент числом:
//     if (Number.isNaN(Number(argument))) {
//       return console.log(`Error!'${argument}' не є числом. Введіть тільки числове значення.`);
//     }
//     totalAmmount += argument 
//   }
//   return totalAmmount / arguments.length  
// }

// //?
// console.log(calculateAverage(10, 10, 20, 200)); // 60
// console.log(calculateAverage('ad', 2, 3, 4, 'awd')); // Error
// console.log(calculateAverage(20, 30, 200, 50));// 75













//TODO:=========task-3=================
const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

// function getAllTitlesOfFilms(films) {
//   let filmsTitle = [];

//   for (let film of films) {
//     filmsTitle.push(film.title)
//   }
//   return filmsTitle
// }

// console.log(getAllTitlesOfFilms(filmoteka));


//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {

//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return `Фільм '${filmTitle}' є у нашій фільмотеці`;
//     } 
//   }
//   return `Фільму з назвою '${filmTitle}' не знайдено :(`
// }

// console.log(findFilmByName(filmoteka, 'Venom'));
// console.log(findFilmByName(filmoteka, 'Saw'));
// console.log(findFilmByName(filmoteka, 'Atlantida'));
// console.log(findFilmByName(filmoteka, 'Luca'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films) {
//   let arrAdultFilms = [];

//   for (const film of films) {
//     if (film.adult) {
//       arrAdultFilms.push(film)
//     }
//   }

//   return arrAdultFilms
// }

// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// function getNotAdultFilms(films) {
//   let arrAdultFilms = [];

//   for (const film of films) {
//     if (!film.adult) {
//       arrAdultFilms.push(film)
//     }
//   }

//   return arrAdultFilms
// }

// console.log(getNotAdultFilms(filmoteka));









//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const arr = ['Джаз', 'Блюз'];
// arr.push('Рок-н-рол')
// console.log(arr);

// arr.splice(1, 1, 'Класика');
// console.log(arr);

// const firstArrElement = arr.shift();
// console.log(firstArrElement);
// console.log(arr);

// arr.unshift('Реп' , 'Реггі');
// console.log(arr);













//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//? Answer
// Варіант №1 простий
  // function minNumber (a, b) {
  //   if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
  //     return 'Введені аргументи не є числом';
  //   }

  //   return a > b ? b : a
  // }

// Варіант №2 з розбивкою по кожному параметру та перевіркою
//     function minNumber (a, b) {
//     if (Number.isNaN(Number(a))) {
//       return `Введений аргумент "${a}" не є числом`;
//     } else if (Number.isNaN(Number(b))) {
//       return `Введений аргумент "${b}" не є числом`
//     }

//     return a > b ? b : a
//   }

//   console.log(minNumber(2, 8));
//   console.log(minNumber(15, 2));
//   console.log(minNumber(2374, 134));
//   console.log(minNumber('awda', 134));
//   console.log(minNumber(5, 'rdrf'));
// //?







//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//? Answer

function sumAdjacentNumbers (arr) {
  let newArray = [];

  for (let i = 0; i < arr.length -1; i ++) {
    const sum = arr[i] + arr[i + 1] // обчислюємо суму поточного числа arr[i] та його наступного числа arr[i + 1] 
    newArray.push(sum)
  }  
  return newArray
}

console.log(sumAdjacentNumbers(someArr)) // [33, 45, 39, 17, 25, 27, 29]


//?












//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

//? Answer

  function logItems (array) {
    for (let i = 0, j = 1; i < array.length; i += 1, j += 1) {
      console.log(`${j} - ${array[i]}`);
    }
  }

logItems(musicGenres);

//?











//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

//? Answer
function formatMessage(message, maxLength) {
  const rst = message.slice(0, maxLength)
  return rst
}

//?

console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
