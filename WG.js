const wordList = ["Apple","Ocean","Sky","Planet","Dream","Light","River","Mountain","Forest","Idea"];
const sentenceList = [
  "The sun dipped below the horizon.",
  "She whispered secrets to the night.",
  "Stars shimmered in a clear sky.",
  "He chased the echoes of his thoughts.",
  "Rain tapped gently on the windowpane."
];
const paragraphList = [
  "The gentle breeze caressed the fields as twilight set in. Birds returned to their nests, and the sky painted itself with shades of orange and purple. In that peaceful moment, she realized how small yet special life could be.",
  "He wandered through the ancient forest, each step stirring the crisp autumn leaves. Shafts of golden sunlight pierced the canopy, illuminating motes of dust dancing in the air. The silence was profound, broken only by distant birdcalls."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  let output = "";
  if (mode === "word") {
    output = getRandom(wordList);
  } else if (mode === "sentence") {
    output = getRandom(sentenceList);
  } else {
    output = getRandom(paragraphList);
  }
  document.getElementById("output").textContent = output;
}

document.getElementById("generate-btn").addEventListener("click", generate);
