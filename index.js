var questionEl = document.getElementById("question");
var mainEl = document.getElementById("main");
var startButtonEl = document.getElementById("startButton");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var scoreCount = 0;
var timeLeft = 60;
var answerbEl = document.getElementsByClassName("answerb");


//List of button answers
var AButtonEl = document.getElementById("AButton");
var BButtonEl = document.getElementById("BButton");
var CButtonEl = document.getElementById("CButton");
var DButtonEl = document.getElementById("DButton");

//List of questions
var questions = [{question:"Q 1 - Which of the following is correct about features of JavaScript?",
                    correctAnswer:"All of the above", 
                    A:"JavaScript is a lightweight, interpreted programming language.", 
                    B:"JavaScript is designed for creating network-centric applications.",
                    C:"JavaScript is complementary to and integrated with Java."},
                {question:"Q 2 - Which of the following is the correct syntax to redirect a url using JavaScript?",
                    correctAnswer:"window.location='http://www.newlocation.com", 
                    A:"document.location='http://www.newlocation.com", 
                    B:"browser.location='http://www.newlocation.com",
                    C:"navigator.location='http://www.newlocation.com"},
                {question:"Q 3- Which of the following type of variable takes precedence over other if names are same?",
                    correctAnswer:"local variable", 
                    A:"global variable", 
                    B:"Both of local and global variables.",
                    C:"None of them"}]


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
    startTimer(60);
    MakeQuestions();
    
})


function startTimer(timeLeft) {
    
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;

  
      if (timeLeft <= 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        questionEl.textContent = "Game Over";
        mainEl.textContent = "";
        AButtonEl.style.display ="none";
        BButtonEl.style.display ="none";
        CButtonEl.style.display ="none";
        DButtonEl.style.display ="none";
        
      }
      

    }, 1000);
    
}

function MakeQuestions(){
    questionEl.textContent = "";
    mainEl.textContent = "";
    startButtonEl.style.display = "none";
    //Elements for question 1
    for(var i =0; i <questions.length; i++){

    questionEl.textContent = questions[i].question;
    AButtonEl.style.display ="inline-block";
    AButtonEl.textContent = questions[i].A;
    BButtonEl.style.display ="inline-block";
    BButtonEl.textContent = question[i].B;
    CButtonEl.style.display ="inline-block";
    CButtonEl.textContent = question[i].C;
    DButtonEl.style.display ="inline-block";
    DButtonEl.textContent = question[i].correctAnswer;

    answerbEl.addEventListener("click",function(){

        if(this === questions[i].correctAnswer){
            scoreCount += 10;
        }
        else{
            timeLeft-=10;
        }
    })

    }
    
}
