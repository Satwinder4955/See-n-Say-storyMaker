// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let speech = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#btn');
var speakBut = document.querySelector('.pro');


let values = {
  arrNOUNS: ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"],

  arrVERBS: ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],

  arrADJECTIVES: ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],

  arrOTHNOUN: ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],

  arrPLACES: ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
};
/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
  // textToSpeak = '';
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
  speakNow(textToSpeak);
  // resetSpeech();
}

let Elements = document.querySelector('.pro');
Elements.addEventListener('click', randomWord);
let Sentence = document.querySelector('#btn');
Sentence.addEventListener('click', randomSentence);
//  This function make a random sentence after clicking button "make a sentence" it does not depend on other buttons you click or not.
function randomSentence() {
  let randomNoun = getRandomWordFromArray(values.arrNOUNS);
  let randomVerb = getRandomWordFromArray(values.arrVERBS);
  let randomAdjective = getRandomWordFromArray(values.arrADJECTIVES);
  let randomOtherNoun = getRandomWordFromArray(values.arrOTHNOUN);
  let randomPlace = getRandomWordFromArray(values.arrPLACES);

  let sentence = `${randomNoun} ${randomVerb} ${randomAdjective} ${randomOtherNoun} ${randomPlace}`;

  speakNow(sentence);
}

function getRandomWordFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// This function make a random word after clicking each button.
function randomWord(event) {
  let current = event.target.innerText;//btn value
  // Elements.innerHTML = arrPlace.join(", ");
  let some = values[`arr${current}`];
  let random = some[Math.floor((Math.random() * some.length))];
  // var textToSpeak = '';
  textToSpeak += random + ' ';
  speakNow(random);
  // textToSpeak += '';
  // console.log(random);

  return random;
}
