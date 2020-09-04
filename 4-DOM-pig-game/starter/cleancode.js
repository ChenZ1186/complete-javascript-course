var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
// disable the dice image when reloading the page
document.querySelector('.dice').style.display = 'none';
// reset all scores to "0"
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// manipulation the "roll dice" button.
document.querySelector('.btn-roll').addEventListener('click', function() {
    // var store random result of the dice
    var  dice = Math.floor(Math.random() * 6) + 1;
    // display the random dice on the player's interface
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // active manipulation when dice is "1"
    if (dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          // changing player when dice === 1
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;
          //set score in current score to "0" when dice === 1
          document.getElementById('current-1').textContent = '0';
          document.getElementById('current-0').textContent = '0';
          // remove and add toggle
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
          // hide the dice when switching turns
          document.querySelector('.dice').style.display = 'none';
        }

});
