// Your word, sentence, and paragraph pool
const copyPool = [
  "The sun rises beyond the hills",
  "Soft winds sweep through the valley",
  "Birds chirp in harmonious melodies",
  "Clouds drift lazily across the sky",
  "Waves crash against the rocky shore",
  "Leaves rustle in the gentle breeze",
  "The city hums with morning life",
  "Raindrops sparkle on the window pane",
  "Stars scatter across the night sky",
  "The forest breathes with ancient life",
  "Mountains pierce the sky with grandeur",
  "The river flows with endless stories",
  "Laughter echoes in the empty streets",
  "The fire crackles in the cold night",
  "Footsteps fade into the misty morning",
  "Petals fall with the passage of time",
  "Snow blankets the silent village",
  "The ocean stretches beyond the horizon",
  "Sunlight filters through the autumn leaves",
  "The night is alive with whispered dreams"
];

// Utility function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', () => {
    document.getElementById('display').innerHTML = '';
    const n = parseInt(document.getElementById('num').value) || 1;
    const typ = document.getElementById('typ').value;

    if (typ === 'w') {
      createUniqueWords(n);
    } else if (typ === 's') {
      createUniqueSentences(n);
    } else {
      createUniqueParagraphs(n);
    }
  });
});

function createUniqueWords(n) {
  let allWords = copyPool.flatMap(sentence => sentence.split(' '));
  allWords = shuffle(allWords);

  if (n > allWords.length) n = allWords.length; // Prevent overflow

  const selectedWords = allWords.slice(0, n).join(' ');
  document.getElementById('display').innerHTML = `<p>${selectedWords.trim()}.</p>`;
}

function createUniqueSentences(n) {
  let shuffledSentences = shuffle([...copyPool]);

  if (n > shuffledSentences.length) n = shuffledSentences.length;

  const selectedSentences = shuffledSentences.slice(0, n).join('. ') + '.';
  document.getElementById('display').innerHTML = `<p>${selectedSentences.trim()}</p>`;
}

function createUniqueParagraphs(n) {
  let paragraphs = '';
  let sentencesPool = shuffle([...copyPool]);

  for (let i = 0; i < n; i++) {
    if (sentencesPool.length < 5) {
      // If not enough sentences left, reshuffle
      sentencesPool = shuffle([...copyPool]);
    }

    const paragraphSentences = sentencesPool.slice(0, 5);
    sentencesPool = sentencesPool.slice(5); // Remove used sentences

    paragraphs += `<p>${paragraphSentences.join('. ')}.</p>`;
  }

  document.getElementById('display').innerHTML = paragraphs;
}
