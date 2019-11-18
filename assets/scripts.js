function initGame() {

    // The variables used for interaction between this script and the html page. 
    const startButtonEl = document.getElementById("startGameButton");
    const rulesButtonEl = document.getElementById("rulesButton")
    const startContainerEl = document.getElementById("startContainer");
    const questionContainerEl = document.getElementById("questionContainer");
    const finishContainerEl = document.getElementById("finishContainer");
    const rulesContainerEl = document.getElementById("rulesContainer");
    const questionNumberEl = document.getElementById("questionNumber");
    const questionPromptEl = document.getElementById("questionPrompt");
    const answersEl = document.querySelectorAll(".answers-js");

    //The variables for when the user interacts with the page.
    let chosenAnswer = "";
    let currentQuestion = 0;

    startButtonEl.addEventListener("click", function () {
        readRules();
    })

    rulesButtonEl.addEventListener("click", function () {
        startGame();
    })

    // The array of the questions and their answers 
    const questions = [
        {
            number: "Question 1:",
            title: "In a 4/4 time signature what note gets one beat?",
            choices: ["eighth note", "quarter note", "half note", "whole note"],
            answer: "quarter note"
        },
        {
            number: "Question 2:",
            title: "How many notes are in a major scale?",
            choices: ["5", "12", "7", "9"],
            answer: "7"
        },
        {
            number: "Question 3:",
            title: "What is the relative minor of C major?",
            choices: ["Eb minor", "E minor", "Ab minor", "A minor"],
            answer: "A minor"
        },
        {
            number: "Question 4:",
            title: "What is the chord progression used in a plagal cadence?",
            choices: ["V-I", "IV-I", "vi-I", "V-vi"],
            answer: "IV-I"
        },
        {
            number: "Question 5:",
            title: "When in the key of C major what chord will be played to execute a tritone substitution and cadence on a I chord?",
            choices: ["C#7", "F#add9", "G Maj7", "B dim"],
            answer: "C#7"
        }]

    //Hides the question, rules, and finish container
    questionContainerEl.setAttribute("style", "display: none");
    rulesContainerEl.setAttribute("style", "display: none");
    finishContainerEl.setAttribute("style", "display: none");

    //Shows rules of the game.
    function readRules() {
        rulesContainerEl.setAttribute("style", "display: inline");
        startContainerEl.setAttribute("style", "display: none");
    }

    // The actual beginning of the quiz
    function startGame() {
        // hides the start button and brings up the first question. 
        rulesContainerEl.setAttribute("style", "display: none");
        questionContainerEl.setAttribute("style", "display: inline");

        //Gives each of the buttons an event listener so the program knows which was clicked.
        for (let i = 0; i < answersEl.length; i++) {
            const answerEl = answersEl[i];
            answerEl.addEventListener("click", function () {
                chosenAnswer = answerEl.innerText;
                checkAnswer();
            });
        }

        //checks to see if there are more questions, if so it will run the function to display the next function, if not will bring to end screen.
        function checkGameProgress() {
            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                finishGame();
            }
        }

        //brings up the next question to ask.
        function renderQuestion() {

            //Sets to display the correct question number and associating question.
            questionNumberEl.innerHTML = questions[currentQuestion].number;
            questionPromptEl.innerHTML = questions[currentQuestion].title;

            // Puts the correct answer option in the answerEl variable based on where it is in the array.
            for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
                answersEl[i].innerHTML = questions[currentQuestion].choices[i];
            }
        }

        //Checks to see if the answer to the question is right.
        function checkAnswer() {
            if (chosenAnswer === questions[currentQuestion].answer) {
                console.log(chosenAnswer);
                console.log(questions[currentQuestion].answer);
                console.log("winner");
            } else {
                console.log(chosenAnswer);
                console.log(questions[currentQuestion].answer);
                console.log("loser");
            }
            currentQuestion = currentQuestion + 1;
            checkGameProgress();
        }
        renderQuestion();
    }

    function finishGame() {
        finishContainerEl.setAttribute("style", "display: inline");
        questionContainerEl.setAttribute("style", "display: none");
    }

} initGame();




// Done
// bootstrap that guy
// make a start button (jumbotron maybe?? make an on click)
// make questions ()
// designate which answer is correct
// make thing that will show next question
// make answer to questions
// designate which answer is correct
// check for right/wrong
// give prompt that user got it right/wrong





// To Do:
// give reward for right
// make reward change based on how much time is left
// give punishment for wrong
// make a score keeper
// make a high score keeper
// make a thing where they can enter their high score
// give link at the beginning to see high scores.



// Put at the end
// make a timer (not sure yet) 15 seconds * number of questions
// make a time over screen



// would be nice:
// sounds effects
// customizeable theme
// multiple quizzes
// add to portfolio 