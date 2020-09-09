var scores, roundScore, activePlayer, gamePlaying;

init();



// manipulation the "roll dice" button.
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
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
            NextPlayer();
          }
    }


});

  document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

    // add current score to global score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //Next player
      NextPlayer ();
    }
  }
});

  function NextPlayer () {
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

  // New Game BUTTON

  document.querySelector('.btn-new').addEventListener('click', init);


  function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;
    // disable the dice image when reloading the page
    document.querySelector('.dice').style.display = 'none';
    // reset all scores to "0"
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // naming the players with their default name
    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';

    // removing winner title and active palyer sign
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');

    // remove active from second player and adding it to the 1st player
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

  }
