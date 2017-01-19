$(document).ready(initGame);

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 9;
var matchCounter = 0;
var matches = 0;
var attemps = 0;
var gamesPlayed = 0;
var accuracy = Math.round(matches / attemps);

function initGame() {
  $('.win').hide();
  console.log('game started');
  $('.card').on('click', cardClicked);
}


function cardClicked(flipCard){

  if (firstCardClicked === null) {
    // set first card equal to firstCardClicked
    firstCardClicked = $(this).find('.front');
    firstCardBack = $(this).find('.back');
    firstCardBack.hide();
    firstCardClicked.css('pointer-events', 'none');
  } else {
    // set second card equal to secondCardClicked
    secondCardClicked = $(this).find('.front');
    secondCardBack = $(this).find('.back');
    secondCardBack.hide();
    secondCardClicked.css('pointer-events', 'none');
    console.log('comparing cards for match');

    // comapre firstCardClicked and secondCardClicked for a match
    if (firstCardClicked.find('img').attr('src') === secondCardClicked.find('img').attr('src')){
      console.log('match found');
      matchCounter++;
      firstCardClicked = null;
      secondCardClicked = null;

      // if a match is found increase counter
      if (matchCounter === totalPossibleMatches){
        $('.card').hide();
        $('.win').show();
      } else {
        return;
      }
    } else {
      /* If no match is found
      Make game board unclickable and time and when the timer runs out
      Reset the played clicked cards and make game area clickable again */
      $('#game-area').css('pointer-events', 'none');
      timeOut();
      firstCardClicked = null;
      secondCardClicked = null;
      return;
    }
  }
}

function timeOut() {
  setTimeout (function(){
    firstCardBack.show();
    secondCardBack.show();
    console.log('no match found');
    $('#game-area').removeAttr('style');
  }, 2500);
}

function displayStats() {
  $('.games_played_value').text(gamesPlayed);
  $('.attemps_value').text(attemps);
  $('.accuracy_value').text(accuracy + "%");
}

function resetStats () {
  accuray = 0;
  matches = 0;
  attempts = 0;
  displayStats();
}

function resetGame(resetStats) {
  gamesPlayed+=1;
}
