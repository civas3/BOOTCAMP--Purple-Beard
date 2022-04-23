// --NUMBER EXERCICES
// Number Exercise 1 - Age logger
let myAge = 29;
console.log(myAge);

// Number Exercise 2 - So Many Rabbits​
let numberOfRabbits = 2;
numberOfRabbits = numberOfRabbits * 3;
console.log(numberOfRabbits);


// Number Exercise 3 - BODMAS
let bodmasExample = 3;
bodmasExample = bodmasExample + 5 / 6;
console.log(bodmasExample);


// Number Exercise 4: - Random Number Generator​
let randomNumber = Math.floor(Math.random() * 10 + 1) ;
console.log(randomNumber);


// --STRING EXERCICES

// String Exercise 1: Log your country
let myCountry = "Lithuania";
console.log(myCountry);
// String Exercise 2: String Length
console.log(myCountry.length);


//String Exercise 3: Upper Case
let favouriteFood = "Tacos";
console.log(favouriteFood.toUpperCase());
//String Exercise 4: Lower Case
console.log(favouriteFood.toLocaleLowerCase());


//String exercise 5: Concatenation
let myName = "Paulius";
let myAge1 = 29;
console.log("My name is " + myName + " and I'm " + myAge1 + " years old");
//String exercise 6: Template Literals
console.log(`My name is ${myName} and I'm ${myAge1} years old`);


// --CONTROL FLOW EXERCISES

//Control Flow Exercise 1: Password Check
let password = "myPassword";
if(password.length >= 7){
    console.log("true");
} else{
        console.log("false")
    }

//Control Flow Exercise 2: Height Test
let mustHeightForRollerCoaster = 150 + "cm";
let myHeight = 184 + "cm";
if(myHeight >= mustHeightForRollerCoaster){
    console.log("You can go on the ride");
} else{
    console.log("Sorry you are not tall enough");
}


// --FUNCTIONS
//Functions Exercise 1: Simple Function
function simpleFunction(){
    console.log("Hello World");
}
simpleFunction();

 //Function Exercise 2: Quadrupler 
 function quadrupler(numOne){
    let sum = numOne * 4; 
    console.log(sum);
 }
 quadrupler(3);

 //Function Exercise 3: Welcome Message
 function welcome(firstName, lastName){
     let fullName = firstName + lastName;
     console.log(`Hello ${fullName} , how can I help you?`)
 }
 welcome("Paul".toLowerCase()," Civilka".toUpperCase());

 //Function Exercise 4: Temperature Converter
 function temperatureConverter(fahrenheit){
    let celsius = (fahrenheit -32) * 5 / 9;
    console.log(celsius);
 }
 temperatureConverter(10);

 //Function Exercise 5: Dog Years​
 function dogYearsCalculator(yourName, yourAge){
    //let myDogAge = (yourAge - 2) * 5 + 9 + 15
    let firstYear = yourAge / yourAge * 15;
    let secondYear = yourAge / yourAge * 9;
    let eachOtherYear = yourAge / yourAge * 5;
    let myDogAge = (yourAge - 2) * eachOtherYear + firstYear + secondYear
    console.log(`${yourName} is ${myDogAge} years old, in dog age.`)    
 }
 dogYearsCalculator("Paul", 29);


//Function Exercise 6: Calculator
function calculator(num1, operator, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.error("You did not enter two valid numbers");
      return;
    }
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else {
      console.error("You did not enter a valid operator");
      return;
    }
  }
  console.log(calculator(10, "*", 284));

//Function Exercise 7: Less than
function min(a,b){
    if(a < b){
        console.log(a);
    }else{
        console.log(b);
    }
}
min(100,10);


//Function Exercise 8: To the power of
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
      result *= x;
    }

    return result;
  }

  let x = prompt("x?", '');
  let n = prompt("n?", '');

  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }



 