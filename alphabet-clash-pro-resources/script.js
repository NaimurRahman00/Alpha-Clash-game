document.getElementById('play-now').addEventListener('click', function(){
    const firstScreen = document.getElementById('first-screen');
    firstScreen.classList.add('hidden');

    const secondScreen = document.getElementById('second-screen');
    secondScreen.classList.remove('hidden');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const randomNum = parseInt(Math.random() * 25);
    const randomAlphabet = alphabetArray[randomNum];

    const randomLetter = document.getElementById('random-letter');
    randomLetter.innerText = randomAlphabet;

});


