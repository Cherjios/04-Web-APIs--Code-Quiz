var questionEl = document.getElementById("question");
var mainEl = document.getElementById("main");
var startButtonEl = document.getElementById("startButton");
var timerEl = document.getElementById("timer");

//Function to start text coding quiz challenge
function setTextcodingQuizchallenge (){
    var text01 = "Start Quiz Challenge";
    var text02 = "Chose the better answer for a question, if you answer correctly, another question shows up, otherwise you will lose time, total time 60 seconds.";

    questionEl.textContent = text01;
    mainEl.textContent = text02;
}

setTextcodingQuizchallenge();

//Function to button to start quiz
startButtonEl.addEventListener("click", function(){
    //Start time 
    startTimer();
    
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

