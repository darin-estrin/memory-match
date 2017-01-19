$(document).ready(initGame);

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 9;
var matchCounter = 0;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var accuracy;

function initGame() {
  $('.win').hide();
  console.log('game started');
  $('.card').on('click', cardClicked);
  $('.reset').click(resetGame);
}

function cardClicked() {

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
    attempts++;
    // comapre firstCardClicked and secondCardClicked for a match
    if (firstCardClicked.find('img').attr('src') === secondCardClicked.find('img').attr('src')){
      console.log('match found');
      matchCounter++;
      matches++;
      accuracy = parseInt(matches / attempts * 100);
      $('.accuracy_value').text(accuracy + '%');
      displayStats();
      firstCardClicked = null;
      secondCardClicked = null;
      // if a match is found increase counter
      if (matchCounter === totalPossibleMatches){
        $('.card').hide();
        $('.win').show();
      } else {
        displayStats();
      }
    } else {
      /* If no match is found
      Make game board unclickable and time and when the timer runs out
      Reset the played clicked cards and make game area clickable again */
      $('#game-area').css('pointer-events', 'none');
      accuracy = parseInt(matches / attempts * 100);
      $('.accuracy_value').text(accuracy + '%');
      displayStats();
      timeOut();
      firstCardClicked = null;
      secondCardClicked = null;
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
  $('.attempts_value').text(attempts);
}

function resetStats (displayStats) {
  $('.accuracy_value').text('0%');
  $('.attempts_value').text('0');
  accuray = 0;
  matches = 0;
  attempts = 0;
  matchCounter = 0;
}

function resetGame() {
  gamesPlayed++;
  $('.games_played_value').text(gamesPlayed);
  $('.win').hide();
  $('.card').removeAttr('style');
  $('.back').removeAttr('style');
  resetStats();
}
