window.alert("Welcome to my Dice Game");
window.alert("Prize table:" + '\n' + "Roll two sixes to win - a bear​" + '\n' + "Roll double number, other than a six to win - 3 free throws" + '\n' + "Roll even number to win  - 1 free throw​" );
window.alert("Click OK to roll the Dice");
let diceOne = Math.floor(Math.random() * 6 + 1);
let diceTwo = Math.floor(Math.random() * 6 + 1);
let diceTotalNumber = diceOne + diceTwo;
let resultTwoSix = 12;
let resultDoubleNumber = diceOne == diceTwo;
let resultEvenNumber = diceTotalNumber % 2 == 0;

console.log("Dice: " + diceOne);
console.log("Dice: " + diceTwo);
console.log(" ");
console.log("Dice total : " + diceTotalNumber);
console.log(" ");
let message = ( '\n' + "Your rolled: " + '\n' + diceOne + " and " + diceTwo + '\n' + "Dice Total: " + diceTotalNumber );

if(diceTotalNumber === resultTwoSix){
    console.log("Congratulations! You won a bear prize.")
    window.alert("Congratulations! You won a bear prize. " + '\n' + message);
}else if(diceTotalNumber = resultDoubleNumber){
    console.log("Congratulations! You won 3 free throws.");
    window.alert("Congratulations! You won 3 free throws. " + '\n' + message);
}else if(diceTotalNumber = resultEvenNumber){
    console.log("Congratulations! You won 1 free throws.");
    window.alert("Congratulations! You won 1 free throws. " + '\n' + message);
}else{
    console.log("You lost the game");
    window.alert("You lost the game" + '\n' + message);
}

console.log(" ");


