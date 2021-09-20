// questions for the user
var questions = [
  {
    question: "The condition is an if/ else statement is enclosed within?",
    answer1: "Quotes",
    answer2: "Curly brackets",
    answer3: "Parenthesis",
    answer4: "Square brackets",
    correctAnswer: "Parenthesis",
  },

  {
    question: "Array in javascript can be used to store?",
    answer1: "Numbers and stings",
    answer2: "Other arrays",
    answer3: "Booleans ",
    answer4: "All of the above ",
    correctAnswer: "All of the above ",
  },

  {
    question:
      " String values must be enclosed within____ when being assigned to variables?",
    answer1: "Commas",
    answer2: "Curly brackets",
    answer3: "Quotes ",
    answer4: "Parenthesis ",
    correctAnswer: "Quotes",
  },

  {
    question:
      "Avery useful tool used during development and debugging for printing content to the debugger is ?",
    answer1: "Javascript ",
    answer2: "Terminal/Bash",
    answer3: "For loops",
    answer4: "Console.log",
    correctAnswer: "Terminal/Bash",
  },
];

//variables
var currentIndex = 0;
var timerEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var startBtn = document.querySelector(".startbtn");
var answerButtons = document.querySelectorAll(".checkBtn");
var highScore = document.querySelector("#highscore");
var gameArea = document.querySelector("#gamearea");
var submitBtn = document.querySelector(".submitBtn");
var right = document.querySelector(".right");
//display questions
function displayQuestion() {
  console.log("display question");
  questionEl.textContent = questions[currentIndex].question;
  answer1El.textContent = questions[currentIndex].answer1;
  answer2El.textContent = questions[currentIndex].answer2;
  answer3El.textContent = questions[currentIndex].answer3;
  answer4El.textContent = questions[currentIndex].answer4;
}
//countdown time
function countdown() {
  var timeLeft = 45;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}
//the start button shows questions once the start button is clicke hide fuction hides question till start is clicked
function show(element) {
  element.style.display = "block";
}

function hide(element) {
  element.style.display = "none";
}
function endGame() {
  show(highScore);
  hide(gameArea);
}
// compares user answers with the correct answers
answerButtons.forEach(function (ansBtn) {
  ansBtn.addEventListener("click", function (event) {
    var userGuess = event.target.textContent;
    if (userGuess === questions[currentIndex].correctAnswer) {
      right.textContent = "You got it right!";
      console.log("You got it right");
    } else {
      right.textContent = "YOU GO IT WRONG!!";
      console.log("WRONG");
    }
    currentIndex++;
    console.log(currentIndex, questions.length);
    if (currentIndex === questions.length) {
      console.log("game over");
      endGame();
    } else {
      displayQuestion();
    }
  });
});

startBtn.addEventListener("click", function () {
  // toggleElementDisplay(messageEl);
  // toggleElementDisplay(gameEl);
  show(gameArea);
  countdown(timerEl);
  displayQuestion();
  hide(startBtn);
});
submitBtn.addEventListener("click", function () {
  //grab value of input

  //save local in storage
  localStorage.setItem("submitBnt");
});
hide(highScore);
hide(gameArea);
