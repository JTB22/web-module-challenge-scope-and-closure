//❗❗ PLEASE READ THE README file for project instructions, helpful resources, additional tasks and stretch problems, and more ❗❗ 

// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log('example task:', processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  Counter1 is a function that returns a function that can be re-used. Counter2 is a function that effects the global count variable.

  2. Which of the two uses a closure? How can you tell?

  Counter 1 uses a closure because it has a function inside of it containing a variable that is defined in the function.
  Counter 2 does not because the variable not defined in a function, instead it is defined in the global scope.

  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  

      Counter 1 would be preferable if you wanted to create a counter that could be used in multiple instances. Counter 2 would be preferable if you wanted to create a counter that is used in a single instance globally.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// counter1();
// counter1();
// console.log('Task 1: ',counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// counter2();
// counter2();
// console.log('Task 1: ',count);

/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
  // Return a random whole number of points scored by one team in an inning  (between 0 and 2)
  return Math.floor(Math.random() * 3);
}

console.log('Task 2: ',inning(),inning(),inning(),inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 in the first parameter
  2. Receive a number of innings to be played in the second parameter
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, max){
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < max; i++){
    homeScore += inning();
    awayScore += inning();
  }
  return {
    Home: homeScore,
    Away: awayScore
  }
}

console.log('Task 3: ',finalScore(inning, 9));


/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function in a parameter - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function 
  
For example: invoking getInningScore(inning) might return this object:
{
  "Home": 0,
  "Away": 2
}
  */


function getInningScore(inning){
  return {
    Home: inning(),
    Away: inning()
  }
}

console.log('Task 4: ',getInningScore(inning));

/* STRETCH: ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function in the first parameter that will take `getInningScore` from Task 4 as its argument
  2. Receive the callback function in a second parameter that will take `inning` from Task 2 as its argument
  3. Receive a number in a third parameter that will take the number of innings to be played as its argument
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score (see the example below).
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
] */
// NOTE: There is no test associated with this code; if your output matches the given example, consider it complete!
function scoreboard(getInningScore, inning, max){
  let homeScore = 0;
  let awayScore = 0;
  let scoreBoard = [];
  for(let i = 0; i < max; i++){
    let point = getInningScore(inning);
    homeScore += point.Home;
    awayScore += point.Away;
    scoreBoard.push(`Inning ${i+1}: Away ${point.Away} - Home ${point.Home}`);
  }
  if(homeScore === awayScore){
    scoreBoard.push(`This game will require extra innings: Away ${awayScore} - Home ${homeScore}`);
  } else {
    scoreBoard.push(`Final Score: Away ${awayScore} - Home ${homeScore}`);
  }
  return scoreBoard;
}

console.log('Task 5: ',scoreboard(getInningScore, inning, 9));
console.log('Task 5: ',scoreboard(getInningScore, inning, 9));
console.log('Task 5: ',scoreboard(getInningScore, inning, 9));
console.log('Task 5: ',scoreboard(getInningScore, inning, 9));





/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
