var questionEl = document.getElementById("question");
var mainEl = document.getElementById("main");
var startButtonEl = document.getElementById("startButton");
var timerEl = document.getElementById("timer");
//List of button answers
var AButtonEl = document.getElementById("AButton");
var BButtonEl = document.getElementById("BButton");
var CButtonEl = document.getElementById("CButton");
var DButtonEl = document.getElementById("DButton");


//List of questions
var question1 = {question:"Q 1 - Which of the following is correct about features of JavaScript?",
    correctAnswer:"All of the above", 
    A:"JavaScript is a lightweight, interpreted programming language.", 
    B:"JavaScript is designed for creating network-centric applications.",
    C:"JavaScript is complementary to and integrated with Java."}





//Function to start text coding quiz challenge
function setTextcodingQuizchallenge (){
    var text01 = "Start Quiz Challenge";
    var text02 = "Chose the better answer for a question, if you answer correctly, another question shows up, otherwise you will lose time, total time 60 seconds.";
    
    questionEl.textContent = text01;
    mainEl.textContent = text02;
    AButtonEl.style.display ="none";
    BButtonEl.style.display ="none";
    CButtonEl.style.display ="none";
    DButtonEl.style.display ="none";
}

setTextcodingQuizchallenge();

//Function to button to start quiz
startButtonEl.addEventListener("click", function(){
    //Start time 
    startTimer();
    questionEl.textContent = "";
    mainEl.textContent = "";
    startButtonEl.style.display = "none";
    questionEl.textContent = question1.question;
    AButtonEl.style.display ="inline-block";
    AButtonEl.textContent = question1.A;
    BButtonEl.style.display ="inline-block";
    BButtonEl.textContent = question1.B;
    CButtonEl.style.display ="inline-block";
    CButtonEl.textContent = question1.C;
    DButtonEl.style.display ="inline-block";
    DButtonEl.textContent = question1.correctAnswer;

})


function startTimer() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        speedRead();
        
      }
  
    }, 1000);
  }

