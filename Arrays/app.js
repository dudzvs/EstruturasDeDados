let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// Number of Elements in the array
/* console.log(daysOfWeek.length); */

// Show elements of the array
for (let i = 0; i < daysOfWeek.length; i++) {
  /* console.log(daysOfWeek[i]); */
}

const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  /* console.log(fibonacci[i]); */
}

// Acrescentendo elementos

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inserindo um elemento no final do Array;
numbers.push(10, 22, 33);

// Inserindo um elemento na primeira posicao;
numbers.unshift(-2, -4);

// Removendo Elementos no final de um Array;
numbers.pop();

// Removendo elemtos no inicio do array;
numbers.shift();

// Remover elementos a partir de um indice;
numbers.splice(1, 3);

// Adicionar elementos a partir de um indice;
numbers.splice(1, 0, 1, 2, 3);
/* console.log(numbers); */

// Arrays Bidimensionais;

let averageTemp = [];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 81;
averageTemp[0][4] = 79;
averageTemp[0][5] = 72;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 71;
averageTemp[1][3] = 88;
averageTemp[1][4] = 75;
averageTemp[1][5] = 75;

function printMyMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      /* console.log(arr[i][j]); */
    }
  }
}

printMyMatrix(averageTemp);

// Laço for...of;

for (const n of numbers) {
  /* console.log(n % 2 === 0 ? 'even' : 'odd'); */
}

// Reduce
/* console.log(numbers); */
numbers.reduce((previou, current) => previou + current);

// Entries, keys and values of Array

let aEntries = numbers.entries();
/* console.log(aEntries.next().value);
console.log(aEntries.next().value); */

for (const n of aEntries) {
  /* console.log(n); */
}

// Invertendo um array
numbers.reverse();
// Ordenando, se nao passar a callback de comparaca ira ordenar pela ordem lexografica pois pressupoe que todos os elementos sao strings;
numbers.sort((a, b) => a - b);
/* console.log(numbers); */

// Ordenação personalizada;
const friends = [
  {
    name: 'John',
    age: 55,
  },

  {
    name: 'Ana',
    age: 22,
  },

  {
    name: 'Carlos',
    age: 44,
  },
];

function comparePerson(a, b) {
  if (b.age > a.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

/* console.log(friends.sort(comparePerson)); */

// Método includes;

let number2 = [5, 4, 8, 7, 8, 9, 14, 44];

console.log(number2.includes(8)); // true: elemento existe no array;
console.log(number2.includes(22)); // false: elemento nao existe no array;
