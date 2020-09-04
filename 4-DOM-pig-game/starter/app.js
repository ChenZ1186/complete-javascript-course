/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* first we need to create a couple of variables to keep track of the most important things happening in our game.
one of the most important thing of all is the score for each player.

now we could create a variable for each player, but we want to keep things clean, so we want only one variable. to do so we need to use array.

*/

/*var scores = [0,0];*/ // both score will set to zero.
// we also need a variale for the round score. and this needs to be only one value, because we have only one score at a time (one round score at a time).
/* var  roundScore = 0; */
// but we want to make it even cleaner
/*
var scores, roundScore;

scores = [0,0];
roundScore = 0;
*/

// we also need a variable which will tell me which which is the current player.

var scores, roundScore, activePlayer;

scores = [0,0];  // we will use this var to store and read values
roundScore = 0;
activePlayer = 0; /* 0 - first player 1 - second player */
// we're doing it this way because later we will use this variable to read the scores out of this array.

/*                      dice                                 */
/*in order to create the dice we need to calculate a random number so lets call it dice*/

/*var dice; < has been removed from here and went into the chain scope inside the function cause we only need it there.*/
// we will use the math object which is a build in objects which have a lot of properties and methods for mathematical constants and functions.

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

/*                  DOM manipulation                           */

/* the object that will give us access to the DOM is the document object.
there are couple of methods  that we can use to select elements from our webpage. but we gonna use the most usefull one.

HOW DOES querySelector works?
it works the same way as CSS by selecting elements.
the only diffrence is that it only selects the first element that it finds, but there is a solution for that.

lets select something from our page:
we will select the left text in the red box (at the left side buttom) and put the value of our dice in the text.

steps:
1) go to the html file and look for  <div class="player-current-score" id="current-0">11</div>.
2) and we will need to select the id="score-0"

* if we want to do the same thing to the second player then we will have to select the id="score-1"
// if we want to change the text we need to use another method, which is the text content method.
*/

document.querySelector('#current-' + activePlayer).textContent = dice;

/* at the beggining we defined a var called activePlayer for keeping track who is the player in the current role.
so we will use the current-0 and the activePlayer var together as a string.
'#current-' + activePlayer > current-0/1 first player or second player. */

/*          two ways to change the content of the selection  */

/*1) textContent - can only set plain text,no html.

what if we want to put some html also in the selected element then we have to use the inner HTML method instead of the textContent.
if we will put HTML code inside textContent we will see the actual text that build the code like <em> + dice ...  */

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// HTML code will have to be as a string! innerHTML = 'string'.

/* we can use the querySelector also to read elements from a webpage. and to store them inside a var.  */

var x = document.querySelector('#score-0').textContent;
console.log(x);

/*      using querSelector to change the CSS of some elements.   */

// we want to hide the dice so when we open the game we wont see a number of dice already. <img src="dice-5.png" alt="Dice" class="dice">

//document.querySelector('.dice').style.display = 'none';


/*          Events & Events Handling: Rolling the dice       */

/* Event are Notifications that are sent to notify the code that something happened on the webpage.
Examples: clicking a button, resizing a window, scrolling down or pressing a key.

    Event listener: A function that performs an action based on a certain event. it waits for a specific event to happen, such like opening up a pop-up window, showing animations.


    how is that event then processed?

    Execution Context
        Second()

    Execution Context
        first()

    Global Execution    -----------     Click         Scroll
        Context         |          |    Event          Event
  --------------------  |----------
    Execution Stack

    first we need to remember about the Execution Stack, AND THAT BECAUSE, the rule is that an event can only be processed, or handled as soon as the Execution Stack is empty, which means that all the functions have returned in the example above we have to execution contexts on the stack so they need to return first.

    Global Execution    -----------     Click         Scroll
        Context         |          |    Event          Event
  --------------------  |----------
    Execution Stack

    Bisides the Execution Stack we also have somthing called the Message Queue in the java script engine. this is where all the events that happen in the browser are put and they seat there, waiting to be processed. that only happens once the execution stack is empty, which that is the case now in our example. so, now the next event in the line will now get processed

    Global Execution    -----------
        Context         |  Click   |   Scroll
  --------------------  |  Event   |   Event
    Execution Stack     |----------

      Now remember that we have something called an event listener which is a function that reacts to an event, so the event listener is now called, and since is a function its gets its own execution context

                        Execution Context
                          clickHandler()
      Global Execution    -----------
          Context         |  Click   |   Scroll
    --------------------  |  Event   |   Event
      Execution Stack     |----------

      which is then it gets its own Execution Context which then put at the top of the stack and becomes the active execution context.

  Execution Context
    clickHandler()

    Global Execution      -----------
        Context           |  Click   |   Scroll
  --------------------    |  Event   |   Event
    Execution Stack       |----------                             */

/*                set up event clickHandler                   */

/* first step is to select the element in which the event will happen. so in this case it will be the button where we will roll the dice. lets search for the " roll dice" on the html file.
<button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
the class for this one is the class="btn-roll".
we need to select this element.
hit: it always the same why we start with the selection commaned with the querySelector and then manipulation that we want to do on this selection.

*/

function btn(){
    // do something here
}
/* remember if we wanted to call this function, we will do it like this
  btn(); button and then the call function operator which is this one > ();     we always use these parentheses. and if we want to call this funcion btn(); in here .addEventListener('click',>btn< [only the name of the function without the parentheses, because we dont want to call it right here we want the event listener to call the funcion for us. and this button function is then called the callback funcion, and that because it a function that is not called by us but by another function. this is what is called a callback function. a function that we passed into another function as an argument, and this funcion in this case the "event listener" method will then call that function for us. BUT WHAT IF WE DIDNT WANT TO HAVE AN EXTERNAL FUNCTION THAT GETS CALLED BY THE EVENT LISTENER?
  we can simply add a function right here .addEventListener('click',><); and that will be an "anonymous function".]

  anonymous function - funcion that doesn't have a name. so it cannot be reused! we can just write function here like this  .addEventListener('click', funcion() {[and write our function right here.] }); this function doesnt have a name, therefore, cannot use outside of this context here. so we cannot call this funcion button to use it then later in another place. so this function can only be used here. in this case that what we want, becuase we dont want to use the button function anywhere else. all we need this to happen when someone clicks on a button.
  WHAT HAPPENS AS SOON AS SOMEONE CLICKS THE BUTTON?    */
/*[selection]document.querySelector('.btn-roll')[Event listener] .addEventListener('click',) */
    document.querySelector('.btn-roll').addEventListener('click', function() {
        // we need to steps  here:
        // 1. Random number - and we already have it.
      var  dice = Math.floor(Math.random() * 6) + 1; // only need it when someone clicks. and we only declare a variale here in this funcion, becaue we dont need it from the outside.
        // 2. display the results.
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        /* because we create the image names from 1 to 6 we can then use them to create a string which include the name of the file and the dice function.
        its not perfect if we do the same operation all the time document.querySelector('.dice').src = 'dice-' + dice + '.png'; this one. so what we can do is to create a var that will store the selection and then and then use this var whenever we need var diceDOM = document.querySelector('.dice');
        we can see in the html file that the src is an image element the image tag is an image element. <img src="dice-5.png" alt="Dice" class="dice"> so its very simple to change this source attribute, because in javascript we can use the "src" method. diceDOM.src = 'dice-' + dice + '.png';  */

        // 3. update the round score, but only if the rolled number was not "1" because when we roll a "1" we lose and its the next player turn.

        /* if the user rolls a number different from one, so then the score gets added to his round score and he can continue to play. and if he rolls a "1" then its the next player's turn.   */

/*              Updating Score and Changing the Active Player              */

        if (dice > 1) { // we can also use the !== sign which says diff of 1 remember that != is type coercion
          // add scores
          roundScore += dice;
          // this is the same as roundScore = roundScore + dice;
          // we also want to display it in the user interface.
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          // next player if the current player roll equal to "1". we can use an if statment here and we can also use the ternary operator.
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          // this is the same as writing
      /*    if(activePlayer === 0) {
            activePlayer = 1;
          } else {
            activePlayer = 0;
          }
      */
        // set the round back to zero.

            // after the if statament the current score didnt start from zero.
            //it continue from the current score of the first player.
              roundScore = 0;
            // we need to set here one more thing. when a player roll "1", he needs to lose his score that he earned in the current turn.

            /* search for the current-1 and current-0 in the html file
            <div class="player-current-score" id="current-0">11</div>
            <div class="player-current-score" id="current-1">0</div>
            once again we're going to use the getElementById method for that.
            */
            document.getElementById('current-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
                }
          /*              add and remove toggle HTML classes            */
        /* inside player 1 we have toggle called "active"
         <div class="player-0-panel active">
         we need to move it to player 2 when the turn move to him and vica versa.
            */
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
          // in this situation the dot didnt went back to player one when the 2nd player hit the "1" dice.
          // so now we can use something called taggled which says that if the class is active then add the active there and if the class is not active then remove it from there.
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
          // last thing is to hide the dice once the turn switch to another player.
          document.querySelector('.dice').style.display = 'none';
    });

/*.addEventListener()
here we have 2 arguments: 1) event type which in our case is simply click
2) will be the function that will be called as soon as the event happens.*/

/*mdn web docs https://developer.mozilla.org/en-US/
in side there we have all the documentation for javascript html css*/

/*                    set the current number to zero                 */

/* documents.getElementByID method:

   this method works only for ids and it fester than querSelector.
   sometimes when we have ids instead of using querSelector all the time, we can use the getElementByID */
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
// in this case we dont use the CSS style so we dont use the hash symbol "#".
