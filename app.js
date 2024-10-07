// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

let textToSpeak = "";

let display = document.getElementById("currentSentence");

const addButtons = document.querySelectorAll(".add");

var speakButton = document.getElementById("read");

const randomButton = document.getElementById("random");

const resetButton = document.getElementById("reset");

const subjects = [
  "Grandpa",
  "The beetle",
  "My dog",
  "The giraffe",
  "The tiger",
  "Mother",
  "My teacher",
];
const verbs = ["ate", "kissed", "punched", "hate", "saw", "rolled", "lifted"];
const adjectives = [
  "a beautiful",
  "a delicious",
  "a slimy",
  "a fat",
  "a stinky",
  "a scary",
  "a funny",
];
const nouns = ["bug", "worm", "sheep", "fish", "snake", "ant", "chicken"];
const places = [
  "on the moon",
  "on the beach",
  "in my ramen",
  "on the rooftop",
  "in my mouth",
  "on your head",
  "on the road",
];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function addToSentence(strings) {
  let randomIndex = Math.floor(Math.random() * strings.length);

  let randomString = strings[randomIndex];

  if (textToSpeak === "") {
    textToSpeak = randomString;
  } else {
    textToSpeak = textToSpeak.concat(" ", randomString);
  }
  display.innerText = textToSpeak;
  console.log(textToSpeak);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
  speakNow(textToSpeak);
  console.log("textToSpeak was read out");
};

addButtons.forEach(function (button) {
  button.onclick = function () {
    // check data-array attribute to judge which array to be used
    let arrayName = button.getAttribute("data-array");

    if (arrayName === "subjects") {
      addToSentence(subjects);
    } else if (arrayName === "verbs") {
      addToSentence(verbs);
    } else if (arrayName === "adjectives") {
      addToSentence(adjectives);
    } else if (arrayName === "noun") {
      addToSentence(nouns);
    } else if (arrayName === "places") {
      addToSentence(places);
    }
  };
});

randomButton.onclick = () => {
  addToSentence(subjects);
  addToSentence(verbs);
  addToSentence(adjectives);
  addToSentence(nouns);
  addToSentence(places);
};

resetButton.onclick = () => {
  textToSpeak = "";
  display.innerText = "";
  console.log("textToSpeak was reset");
};
