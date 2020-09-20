/*                           04_Immediately_Invoked_Function_Expression - IIFE                                        */
/*
Imagine that we wanted to build a little game, where we win the game if a random score from zero to nine is greater or equal to five, and lose if it's smaller, But, we want to keep the score hidden in this game, OK, so the score should not be visible.

And the answer is to write a simple function, because we already know that variables defined inside of a function, cannot be accessed from the outside scope, right, because the scoping chain only works the other way around.
*/
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game(); // results: false
*/
/*
If the only purpose is to hide the score variable from the outside, so which means creating a private variable, then we don't need to declare a whole function with a name and then call it. We can do this in a better way, and that is to use an Immediately Invoked Function Expression, which is usually abbreviated as IIFE.
*/

/////// IIFE
/// what's inside of parenthesis cannot be a statement:
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();/*<< invoke */
//console.log(score);  results: true with error of score is not defined
/*
function () {
  
  if it would be like this without the parenthesis, then it would never be called and never do anything, and since we don't attach this to a variable, then nothing would ever happened.
  
}
*/
/*
function without the name, but also without the parentheses, then the JavaScript parser would think that this is a function declaration, but since we don't have any name for the function declaration, then it will throw an error, so we basically need to trick the parser, and make it believe that what we have here is an expression, and not a declaration And the solution, is to wrap the entire thing into parenthesis, because in JavaScript, what's inside of parenthesis cannot be a statement, and like this, JavaScript will know that it should treat this as an expression, and not as a declaration.
*/

// dding a parameter called goodLuck to the game, and the more goodLuck we add to the game,

(function (goodLuck) { // the more goodluck we'll add the higher the chances to win
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5); // << how do we now pass the argument into the function? right here 

/*
in this case we are not using the function to create a piece of reusable code, all we want here, is to create a new scope, that is hidden from the outside scope, so where we can safely put variables. And with this, we obtain data privacy, and also don't interfere with other variables in our global execution context. this is not to create a piece of code that we will reuse, this is just for data privacy.
*/