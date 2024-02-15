document.getElementById('play-now').addEventListener('click', function () {
    // Add first screen
    const firstScreen = document.getElementById('first-screen');
    firstScreen.classList.add('hidden');

    // Hide second screen
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
    console.log(currentLetter, keyPressed);

    if (currentLetter === keyPressed) {
        console.log('Yahooo! You got a point.')
    } else {
        console.log('Oh no! you lost a life.')
    }

})

// Alphabet Matching