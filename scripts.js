var ranNum;
var userGuess;
var minVal = 0;
var maxVal = 100;
var guessInput = document.getElementById('input-enter');
var guessButton = document.getElementById('guess');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var lastGuess = document.getElementById('last-guess')
var highLow = document.getElementById('high-low')
var minInput = document.getElementById('min')
var maxInput = document.getElementById('max')

//Event Listeners

minInput.addEventListener('blur', function(){
  var userMin = parseInt(minInput.value);
  minVal = userMin;
  randomNumber();
  clearInput();
  console.log('This is user min value = ' + minVal);
})

maxInput.addEventListener('blur', function(){
  var userMax = parseInt(maxInput.value);
  maxVal = userMax;
  randomNumber();
  clearInput();
  console.log('this is user max value = ' + maxVal);
})

guessButton.addEventListener('click', evaluateGuess);

guessInput.addEventListener('input', function(e){
  console.log(e);
  if (e.target.value === "") {
    disableButton(guessButton);
    disableButton(clearButton);
    disableButton(resetButton);
  } else {
    enableButton(guessButton);
    enableButton(clearButton);
    enableButton(resetButton);
  }
})

clearButton.addEventListener('click', clearInput);

resetButton.addEventListener('click', function () {
  randomNumber();
  clearInput();
  resetEverything();
});

// Random Number Generator Function

function randomNumber() {
  ranNum = Math.floor(Math.random() * (maxVal- minVal)) + minVal;
  console.log(ranNum);
  return ranNum;
}

// Call function to generate number

randomNumber();

// Other functions

function evalOutcome(userGuess, ranNum) {
  if (userGuess < minVal || userGuess > maxVal) {
    lastGuess.innerText = "Oops!"
    highLow.innerText = 'Type a number within the range';
  } else if (userGuess > ranNum) {
    lastGuess.innerText = userGuess;
    highLow.innerText = 'That is too high';
  } else if (userGuess < ranNum) {
    lastGuess.innerText = userGuess;
    highLow.innerText = 'That is too low';
  } else {
    lastGuess.innerText = userGuess;
    highLow.innerText = 'Boom!!!';
  }
}

// the above is set to run if evaluateGuess passes below.
// It evaluates whether guess is a number or not.

function evaluateGuess(userGuess) {
  userGuess = parseInt(guessInput.value);
  if (!isNaN(userGuess)) {
    evalOutcome(userGuess, ranNum);
  } else {
    lastGuess.innerText = 'Yikes!';
    highLow.innerText = 'Type a number';
  }
  console.log("This is the user guess " + userGuess);
}

// Button Functions

function clearInput() {
  guessInput.value = '';
  console.log(guessInput);
}

function resetEverything() {
  lastGuess.innerText = '???';
  highLow.innerText = 'Is it high or low';
}

function disableButton(button) {
  button.classList.add('disabled');
}
function enableButton(button) {
  button.classList.remove('disabled');
}
