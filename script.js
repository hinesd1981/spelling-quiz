console.log("Script is running!")
const spellings = {
    'accommodate': ["acommodate", "accomodate"],
    'beginning': ["begining", "begginning"],
    'business': ["buisness", "busness"],
    'definitely': ["definately", "definitly"],
    'embarrass': ["embarass", "embarras"],
    'friend': ["freind", "frend"],
    'guard': ["gaurd", "gard"],
    'happened': ["hapened", "happend"],
    'interrupt': ["interupt", "interrrupt"],
    'knowledge': ["knowlege", "knawledge"],
    'library': ["libary", "liberry"],
    'necessary': ["necessery", "neccessary"],
    'noticeable': ["noticable", "noticeble"],
    'occasionally': ["occasionaly", "ocassionally"],
    'possession': ["posesion", "possesion"],
    'receive': ["recieve", "reiceve"],
    'separate': ["seperate", "seperat"],
    'surprise': ["suprise", "surprize"],
    'tomorrow': ["tommorow", "tomorow"],
    'until': ["untill", "untile"],
    'weather': ["wether", "weither"],
    'weird': ["wierd", "weard"]
};
let correctWord;
let options;
let correctAnswers = 0;
let incorrectAnswers = 0;
let lastWord = null;

function startGame() {
    console.log("startgame function executd!")
    const entries = Object.entries(spellings);
    let word;
    let wrongOptions;
    
    do {
        [word, wrongOptions] = entries[Math.floor(Math.random() * entries.length)];
    } while (word === lastWord);
    
    lastWord = word;

    correctWord = word;
    const incorrectChoice = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    
    options = [correctWord, incorrectChoice];
    options.sort(() => Math.random() - 0.5);

    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('feedback').textContent = '';
}

function checkAnswer(index) {
    if (options[index] === correctWord) {
        correctAnswers++;
        document.getElementById('feedback').textContent = 'That is correct, Well done!';
    } else {
        incorrectAnswers++;
        document.getElementById('feedback').textContent = `That is incorrect. The correct spelling is ${correctWord}.`;
    }

    document.getElementById('score').textContent = `Current Score: ${correctAnswers} correct, ${incorrectAnswers} incorrect.`;

    // Add this line to load a new question after checking the answer
    setTimeout(startGame, 5000);  // Wait for 1 second and then load the next question
}

function endGame() {
    document.getElementById('feedback').textContent = `Thanks for playing! Final Score: ${correctAnswers} correct, ${incorrectAnswers} incorrect.`;
    correctAnswers = 0;
    incorrectAnswers = 0;
}

startGame();
