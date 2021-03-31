//questiions 
var questionsArray=[
{
     question: "the condition is an if/ else statement is enclosed within?",
     answer1: "qoutes",
     answer2: "curly brackets",
     answer3: "parenthesis",
     answer4: "squarebrackets",
     correctAnswer:"blue"
},

{
     question: "array in javascript can be used to store?",
     answer1: "numbers and stings",
     answer2: "other arrays",
     answer3: "booleans ",
     answer4: "all of the above ",
     correctAnswer:"Elon Musk"
},
  
{
    question: " string values must be enclosed whitin____ when being assigned to variables?",
    answer1: "Commas",
    answer2: "Curly brackets",
    answer3: "qoutes ",
    answer4: "paranthesis ",
    correctAnswer:"Mark Zuckerberg"
},
 
{
    question: "a very useful tool used during development and debbuging for printing content to the debugger is ?",
    answer1: "javascript ",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console.log",
    correctAnswer:"Steve Jobs"

}]
console.log(questionsArray)
//variables
var currentIndex=0
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var answerEl1 = document.querySelector(".answer1");
var answerEl2 = document.querySelector(".answer2");
var answerEl3 = document.querySelector(".answer3");
var answerEl4 = document.querySelector(".answer4");
//display questions
function displayQuestion(){
   questionEl.textContent = questionsArray[currentIndex].question
   answer1El.textContent = questionsArray[currentIndex].answer1
   answer2El.textContent = questionsArray[currentIndex].answer2
   answer3El.textContent = questionsArray[currentIndex].answer3
   answer4El.textContent = questionsArray[currentIndex].answer4
}
displayQuestion();