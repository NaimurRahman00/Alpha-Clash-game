document.getElementById('play-now').addEventListener('click', function () {
    // Hide first screen
    const firstScreen = document.getElementById('first-screen');
    firstScreen.classList.add('hidden');

    // Add second screen
    const secondScreen = document.getElementById('second-screen');
    secondScreen.classList.remove('hidden');

    // Random Alphabet
    const randomLetter = randomAlphabet();
    const randomLetterOnScreen = document.getElementById('random-letter');
    randomLetterOnScreen.innerText = randomLetter;

    // key button background color change
    const keyButton = document.getElementById(randomLetter);
    keyButton.style.background = 'orange';

});



// For random Alphabet generator
function randomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const randomNum = parseInt(Math.random() * 25);
    const randomAlphabet = alphabetArray[randomNum];
    return randomAlphabet;
}

// Keyboard pressing
document.addEventListener('keyup', function (event) {
    const currentLetterElement = document.getElementById('random-letter');
    const currentLetter = currentLetterElement.innerText.toLowerCase();

    const keyPressed = event.key;

    if (currentLetter === keyPressed) {
        // Change previous key color
        const previousKey = document.getElementById(keyPressed);
        previousKey.style.background = 'white';

        // A new letter
        const randomLetter = randomAlphabet();
        const randomLetterOnScreen = document.getElementById('random-letter');
        randomLetterOnScreen.innerText = randomLetter;

        // New key button background color change
        const keyButton = document.getElementById(randomLetter);
        keyButton.style.background = 'orange';

        // Score update
        const presentScoreElement = document.getElementById('score-btn').innerText;
        const presentScore = parseInt(presentScoreElement);
        const presentScoreUpdated = presentScore + 1;
        const totalScoreElement = document.getElementById('score-btn');
        totalScoreElement.innerText = presentScoreUpdated;

    } else {
        // life reduce
        const presentlifeElement = document.getElementById('life-btn');
        const lifeCountNumber = presentlifeElement.innerText;
        const lifeCount = parseInt(lifeCountNumber);
        const lifeReduce = lifeCount - 1;
        presentlifeElement.innerText = lifeReduce;
    }

})

// Alphabet Matching
