$(document).ready(initializeGame);

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 2;
var matchCounter = 0;

function initializeGame() {
  console.log("game started");
  $('.card').on('click', flipCard);
}

function flipCard() {
  console.log('flipped: ', this);
  var cardBack = $(this).find('.back');
  cardBack.hide();
  var cardFront = $(this).find('.front');
  cardFront.show(cardClicked);
}

function cardClicked(flipCard){
$('.card').on('click', function(){
  if ($(this).has('div').hasClass('back') === true) {
    console.log(true);
  }
});


  if (firstCardClicked === null) {
    firstCardClicked = $(this).find('img');
    console.log(firstCardClicked);
  } else {
    secondCardClicked = $(this).find('img');
    console.log(secondCardClicked);
    if(firstCardClicked.attr('src') === secondCardClicked.attr('src')) {
      console.log('match found');
      matchCounter++;
      var removeClass1 = firstCardClicked.parents('.card').find('.back').removeClass('back');
      var removeClass2 = secondCardClicked.parents('.card').find('.back').removeClass('back');
      firstCardClicked = null;
      secondCardClicked = null;
      if(matchCounter === totalPossibleMatches) {
        $('#game-area').html("<h1 class='win'>Congratulations, You won!</h1>");
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

  function timeOut() {
    setTimeout(function(){
      $('#game-area').find('.back').show();
    }, 2000);
  }

}
