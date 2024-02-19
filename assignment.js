// Задание 7.6.1

function isPalindrome(word) {
    word = word.toLowerCase();

    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}

// Проверка с примером №1
isPalindrome("Довод");
// Проверка с примером №2
isPalindrome("Сантимент");



// Задание 7.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

const uniqueSet = new Set(arr)
const uniqueArr = Array.from(uniqueSet)

console.log(uniqueArr)



// Задание 7.6.3

let userInput = +prompt('Введите число: ')

let value = 0;
let myArr = [];

while (value <= userInput) {
	myArr.push(value);
	value += 1;
}

console.log(myArr)



// Задание 7.6.4
const size = 3;

let field = [];
for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
        row.push(' ');
    }
    field.push(row);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            field[i][j] = 'x';
        } else {
            field[i][j] = 'o';
        }
    }
}

for (let i = 0; i < size; i++) {
    console.log(field[i].join(' '));
}



// Задание 7.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        obj[key].forEach(function(item) {
            arrValues.push(item);
        });
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);

