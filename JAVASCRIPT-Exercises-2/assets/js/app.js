//ARRAYS
//Arrays Exercise 1: Breakfast​
let breakfast = [' Oats', ' Banana', ' Chocolate'];
breakfast.unshift(' Soya milk');
breakfast.push(' Coffe');
console.log(`My breakfast are made from total ${breakfast.length} items,${breakfast}. `);

//Arrays Exercise 2: Last Value
//I dont understann the question

// // Arrays Exercise 3: Music​
// let musicGenres = ['rock', ' rap'];
// musicGenres.push(' jazz');
// console.log(musicGenres);
// // let midValue= (musicGenres.length -1) / 2;
// // console.log(musicGenres[midValue]);

// function midValue(a1){
//   let midValue = (a1.length -1) / 2;
//   if (midValue - 1 === 0){
//     a1[midValue] = 'classical';
//     a1.push('blues', 'Reggae');
//     console.log(a1)
//   }
// }
// midValue(musicGenres);  

// //LOOPS
// //Loops Exercise 1: Counting​
// for(let i=10; i >= 0; i--){
//   console.log(i);
// }

// //Loops Exercise 2: Tasks​
// let tasks = ['wash dishes', 'hoover', 'mop the floor'];
// console.log(tasks);
// for(let i = 0; i < tasks.length; i++){
//   console.log(`Task ${i + 1} contains ${tasks[i]}`);
// }

// //Loops Exercise 3: Last Loop Value
// let i = 3;
// while (i){
//    console.log(i--);
// }

// //Loops Exercise 4: Even Numbers
// for(let i=0; i <= 10; i++){
//   if (i % 2 === 0){
//     console.log(i);
//   }
// }

// //Loops Exercise 5: Replace “for”
// let x = 0;
// while(x < 3){
//   console.log(`number ${x} !`)
//   x++;
// }

//Loops Exercise 6: Sum
let myNumbers = [3,3,3]
let total = 0;
for(let i = 0; i < myNumbers.length; i++){
    total += myNumbers[i];
}
console.log(total);


