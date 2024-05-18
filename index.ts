//Question No.1
console.log("Hello World");

//Question No.2
let temprature = 10;

if(temprature < 20){
    console.log("It's cold");
}

//Question No.3
let apples = 10;

console.log(apples - 3);

//Question No.4
let firstName="Javid", lastName="Ali";
let fullName= `${firstName}  ${lastName}`
console.log(fullName);

//Question No.5
let a = 5;
if(a > 3){
    console.log("Yes");
}else{
    console.log("No");
}

//Question No.6
function calculateArea(input: number) {
    return input;
}
// Question No.6 call
const areaOfCricle = calculateArea(160);
console.log(areaOfCricle);


//Question No.7
for(let x = 1; x <= 50; x++) {
    if(x % 3 === 0) {
        console.log("Fizz");
    }else if(x % 5 === 0) {
        console.log("Buzz");
    }else{
        console.log(x);
    }
}

// Question No.8
let temperatures = [15, 20, 25, 30, 35];
let highest_temp = Math.max(...temperatures);
console.log(highest_temp);


// Question No.9
function age(enterAge: number) {
    if(enterAge < 18) {
        console.log("Under age")
    }else if(enterAge > 18){
        console.log("Adult");
    }
}
age(20);

// Question no 10
const numbersArray = [10, -17, 20, -55, 90, -44, 20];
const positiveNumbers = numbersArray.filter(function(number) {
    return number > 0;
});

console.log("Count of positive numbers:", positiveNumbers.length);

// Question no 11
let wordsOfFruits = ["Apple", "Banana", "Orange", "Almond", "Mango"];

function wordsWithFunc(wordsString: string[]) {
    return wordsString.filter(function(wordsFind) { 
        return wordsFind.toLowerCase().startsWith('a');
    });
}

console.log(wordsWithFunc(wordsOfFruits));

// Question no 12
let fruits: string[] = ["Apple", "Banana", "Orange", "Avacado", "Mango"];
console.log(fruits[fruits.length - 2]);


// Question no 13

let numberArray = [1, 2, 3, 4, 5];
function squaredNumbers(numbers: number[]) {
    return numbers.map(function(num) {
        return num * num;
    });
}
console.log("Squared numbers:", squaredNumbers(numberArray)); 

// Question no 14
let arrayElements: any[] = [1, 2, 3, 4, 5];
function reverseArray(elements: any[]): any[] {
    let reversed: any[] = [];
    for (let i = elements.length - 1; i >= 0; i--) {
      reversed.push(elements[i]);
    }
    console.log(reversed);
    return reversed;
}
reverseArray(arrayElements);


// Question no 15
let scoreArray = [10, 5, 20, 20, 4, 5, 2, 25, 1]
function logScoreChanges(scores: number[]): void {
    let max = scores[0];
    let min = scores[0];
    let maxChanges = 0;
    let minChanges = 0;
    scores.forEach((score) => {
      if (score > max) {
        max = score;
        maxChanges++;
      }
      if (score < min) {
        min = score;
        minChanges++;
      }
    });
    console.log(
      `Max score changes: ${maxChanges}, Min score changes: ${minChanges}`
    );
}
logScoreChanges(scoreArray);

// Question no 16

let valuesArray = [ false, null, 0, '', undefined, NaN];

function removeFalsey(values: any[]): any[] {
    return values.filter(Boolean);
}
let removeFalseyArray = removeFalsey(valuesArray);
console.log(removeFalseyArray);

// Question no 17

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);

// Question no 18

let evenOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfElements(numbers: number[], type: "even" | "odd"): number {
    return numbers
        .filter((num) => (type === "even" ? num % 2 === 0 : num % 2 !== 0))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
let sumOfEven = sumOfElements(evenOddNumbers, "even");
let sumOfOdd = sumOfElements(evenOddNumbers, "odd");

console.log("Sum of even numbers:", sumOfEven);
console.log("Sum of odd numbers:", sumOfOdd);

// Question no 19

let checkElement: any[] = [1, 2, 3, "a", "b", "c", true];
let findEle1: any = 'a';
let findEle2: any = 5;

function elementExists(elements: any[], element: any): number {
    return elements.indexOf(element);
}

let existingEle1 = elementExists(checkElement, findEle1);
let existingEle2 = elementExists(checkElement, findEle2);

console.log(`Index of '${findEle1}':`, existingEle1);
console.log(`Index of ${findEle2}:`, existingEle2); 

// Question no 20
let smallNumberArray = [1, 2, 3, 4, 5, 6];
function findSmallest(numbers: number[]): number {
    return Math.min(...numbers);
}

console.log(findSmallest(smallNumberArray));


// Question no 21
let calProductArray = [1, 2, 3, 4, 5];
function calculateProduct(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
}

console.log(calculateProduct(calProductArray));

// Question no 22

let stringsArray = ["peach", "apple", "banana", "melon", "watermelon"];
let minLengthNumber: number = 5;

function filterByLength(strings: string[], minLength: number): string[] {
    return strings.filter((s) => s.length > minLength);
}

let filteredStrings = filterByLength(stringsArray, minLengthNumber);
console.log("Strings longer than", minLengthNumber, "characters:", filteredStrings);


// Question no 23

let dupArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 7, 8, 9];
function findDuplicates(items: any[]): any[] {
    let seen = new Set();
    let duplicates = new Set();
    items.forEach((item) => {
        if (seen.has(item)) duplicates.add(item);
        seen.add(item);
    });
    return Array.from(duplicates);
}
console.log(findDuplicates(dupArray));


// Question no 24

let myNumbers = [1, 2, 3, 4, 5, 7, 8];
function incrementAll(numbers: number[]): number[] {
    return numbers.map((num) => num + 1);
}

console.log(incrementAll(myNumbers));


// Question no 25

let countOccArray = [1, 2, 2, 3, 2, 4, 2, 5];
let targetElement = 2;

function countOccurrences(elements: any[], target: any) {
    return elements.filter((e) => e === target).length;
}

console.log(`The element ${targetElement} appears ${countOccurrences(countOccArray, targetElement)} times.`);


// Question no 26

let sortedArray = [1, 2, 3, 4, 5];
let unsortedArray = [3, 1, 5, 2, 4];

function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(`Is sorted? ${isSorted(sortedArray)}`);
console.log(`Is sorted? ${isSorted(unsortedArray)}`);


// Question no 27

let nameArray = ["Jhon", "Doe", "Jhon"];

function formatNames(names: string[]): string {
    if (names.length < 2) return names.join("");
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

console.log(formatNames(nameArray));


// Question no 28

let celsiusTemperatures = [0, 10, 20, 30, 40, 50];

function convertToFahrenheit(temperatures: number[]): number[] {
    return temperatures.map(function(temp) {
        return ((temp - 32) * 5) / 9;
    });
}
console.log(convertToFahrenheit(celsiusTemperatures));


// Question no 29

const numbers = [1, 2, 3, 4, 5];

function minMaxAverage(numbers: number[]): { 
    min: number, 
    max: number, 
    average: number 
} {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let average =
      numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
    return { min, max, average };
  }

console.log(minMaxAverage(numbers));


// Question no 30
let swapArray = [1, 2, 3, 4, 5];
function swapElements<T>(
    elements: T[],
    index1: number,
    index2: number
): T[] {
    let temp = elements[index1];
    elements[index1] = elements[index2];
    elements[index2] = temp;
    return elements;
}
console.log(swapElements(swapArray, 0, 4));


// Question no 31

let chString = "hello world";
let char = "o";

function countCharacter(str: string, char: string): number {
    return str.split("").filter(function(c) {
        return c === char;
    }).length;
}

console.log(countCharacter(chString, char));


// Question no 32

interface Task {
    task: string;
    completed: boolean;
}

let todoList: Task[] = [
    { task: "Do study", completed: false },
    { task: "Done Excercise", completed: true },
    { task: "Learn Typescript", completed: false }
];

function logUncompletedTasks(todoList: Task[]): void {
    todoList
        .filter(function(task) {
            return !task.completed;
        })
        .forEach(function(task) {
            console.log(task.task);
        });
}

logUncompletedTasks(todoList);

// Question no 33

let intArray = [5, 2, 8, 1, 9, 4];

function sortNumbers(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}

console.log(sortNumbers(intArray));


// Question no 34

let resNumArray = [1, 2, 3, 4, 5];

function reverseNo<T>(elements: T[]): T[] {
    let reversed: T[] = [];
    for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
    }
    return reversed;
}

console.log(reverseNo(resNumArray));


// Question no 35

function calculator(
    operand1: number,
    operand2: number,
    operator: string
): number {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand2 !== 0 ? operand1 / operand2 : NaN;
        default:
            return NaN;
    }
}

console.log(calculator(2, 3, "+"));
console.log(calculator(2, 1, "-"));
console.log(calculator(2, 3, "*"));
console.log(calculator(2, 0, "/"));




