// 2 - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let sortedNums = nums.sort((num1, num2) => num1 - num2)

// console.log(sortedNums);



// 4 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let sortedNums = nums.sort((num1, num2) => num2 - num1)

// console.log(sortedNums);



// 5 -- при помощи filter получить числа кратные 3

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let filterNums = nums.filter(value => value % 3 === 0)

// console.log(filterNums);



// 6 -- при помощи filter получить числа кратные 10

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let filterNums = nums.filter(value => value % 10 === 0)

// console.log(filterNums);



// 7 -- перебрать (проитерировать) массив при помощи foreach()

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// nums.forEach(num => console.log(num));



// // 8 -- перебрать массив при помощи map() и 
// //      получить новый массив в котором все значения будут в 3 раза больше

// let nums = [5, 78, 0, 65, 12, 65, 28, 2, 3, 14, 6, 7, 13, 11, 9, 90, 100, 56, 55, 80];

// let mappedNums = nums.map(num => num * 3)

// console.log(mappedNums);



// 10 - создать массив со словами на 15-20 элементов.

let wordsArray = ['Hello', 'my', 'name', 'is', 'Roman', 'i', 'live', 'and', 'work', 'in', 'Lviv', 'this', 'is', 'my', 'favourite', 'city', 'of', 'Ukraine'];

// 11 -- отсортировать его по алфавиту в восходящем порядке.

// let sortedWords = wordsArray.sort((word1, word2) => (word1.toLowerCase() < word2.toLowerCase()) ? -1 : 1)

// console.log(sortedWords);



// 12 -- отсортировать его по алфавиту  в нисходящем порядке.



// let sortedWords = wordsArray.sort((word1, word2) => word1.toLowerCase() > word2.toLowerCase() ? -1 : 1)

// console.log(sortedWords);



// 13 -- отфильтровать слова длиной менее 4х символов

// let filterLessFour = wordsArray.filter((value) => value.length < 3 ? value : '')

// console.log(filterLessFour);



// 14 -- перебрать массив при помощи map() и получить новый массив 
//         в котором все значения будут со знаком "!" в конце

// let newArray = wordsArray.map((element) => element + '!')

// console.log(newArray);



// 16 Все робити через функції масивів (foreach, map ...тд)

// Дан масив :

let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

// 19 - відсортувати його за  віком (зростання, а потім окремо спадання)

// let increaseUserAge = users.sort((user1, user2) => user1.age - user2.age)

// console.log(increaseUserAge);
// console.log(users); //  бо мутує вихідний масив

// а потім окремо спадання)

// let decreaseUserAge = users.sort((user1, user2) => user2.age - user1.age)

// console.log(decreaseUserAge);
// console.log(users); //  бо мутує вихідний масив



// 20 - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let nameLengthUp = users.sort ((user1, user2) => user1.name.length - user2.name.length);

// console.log(users);  // змінений
// console.log(nameLengthUp);



// 21 - пройтись по ньому та додати кожному юзеру поле id 
//      - яке характеризує унікальний індентифікатор 
//      (По якому принципу його створювати - ваше рішення), 
//      та зберегти це в новий масив 
//      (первинний масив залишиться без змін)

// let idUsers = users.map((value, index) => { 
//     value.id = index + 1
//     return value
// })

// console.log(idUsers);



// 22 -  відсортувати його за індентифікатором

// let idUsersSortById = idUsers.sort((user1, user2) => user1.id - user2.id)

// console.log(idUsersSortById);



// 25 -- наисать функцию калькулятора с 2мя числами и колбеком

// let calcTwo = (num1, num2, callback) => callback(num1, num2);

// console.log(calcTwo(5, 5, (num1, num2) => (num1 * num2) / 2));


// 26 -- наисать функцию калькулятора с 3мя числами и колбеком

// let calcThree = (num1, num2, num3, callback) => callback(num1, num2, num3);

// console.log(calcThree(5, 5, 8, (num1, num2, num3) => (num1 + num2 + num3) * num3));



let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011, color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x", 
        volume: 2, 
        power: 140
    },
    {
        producer: "subaru", 
        model: "impreza", 
        year: 2014, color: "red", 
        type: "sedan", 
        engine: "ej204x", 
        volume: 2, 
        power: 200
    },
    {
        producer: "subaru", 
        model: "outback", 
        year: 2014, 
        color: "red", 
        type: "hachback", 
        engine: "ej204", 
        volume: 2, 
        power: 165
    },
    {
        producer: "bmw", 
        model: "115", 
        year: 2013, 
        color: "red", 
        type: "hachback", 
        engine: "f15", 
        volume: 1.5, 
        power: 120
    },
    {
        producer: "bmw", 
        model: "315", 
        year: 2010, 
        color: "white", 
        type: "sedan", 
        engine: "f15", 
        volume: 1.5, 
        power: 120
    },
    {
        producer: "bmw", 
        model: "650", 
        year: 2009, 
        color: "black", 
        type: "coupe", 
        engine: "f60", 
        volume: 6, 
        power: 350
    },
    {
        producer: "bmw", 
        model: "320", 
        year: 2012, 
        color: "red", 
        type: "sedan", 
        engine: "f20", 
        volume: 2, 
        power: 180
    },
    {
        producer: "mercedes", 
        model: "e200", 
        year: 1990, 
        color: "silver", 
        type: "sedan", 
        engine: "eng200", 
        volume: 2, 
        power: 180
    },
    {
        producer: "mercedes", 
        model: "e63", 
        year: 2017, 
        color: "yellow", 
        type: "sedan", 
        engine: "amg63", 
        volume: 3, 
        power: 400
    },
    {
        producer: "mercedes", 
        model: "c250", 
        year: 2017, 
        color: "red", 
        type: "sedan", 
        engine: "eng25", 
        volume: 2.5, 
        power: 230
    }
];