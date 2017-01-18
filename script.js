$(document).ready(initGame);

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 2;
var matchCounter = 0;

function initGame() {
  console.log('game started');
  $('.card').on('click', flipCard);
}

function flipCard() {
  console.log('flipped:', this);
  var cardBack = $(this).find('.back');
  cardBack.hide(cardClicked);
}

function timeOut() {
  setTimeout (function(){
    $('#game-area').find('back').show();
  }, 2000);
}

function cardClicked(flipCard){
  console.log('test');
  if (firstCardClicked === null) {
    firstCardClicked = $(this).find('img');
    console.log(firstCardClicked.attr('src'));
  } else {
    secondCardClicked = $(this).find('img');
    console.log(secondCardClicked.attr('src'));
    if (firstCardClicked.attr('src') === secondCardClicked.attr('src')){
      console.log('match found');
      matchCounter++;
      firstCardClicked = null;
      secondCardClicked = null;
      if (matchCounter === totalPossibleMatches){
        $('#game-area').html("<h1 class='win'>Congratulations, you won!<h1>");
      } else {
        return;
      }
    } else {
      timeOut();
      firstCardClicked = null;
      secondCardClicked = null;
      return;
    }
  }
}
