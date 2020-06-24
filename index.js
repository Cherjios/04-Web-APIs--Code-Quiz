var questionEl = document.getElementById("question");
var mainEl = document.getElementById("main");

function setTextcodingQuizchallenge (){
    var text01 = "Start Quiz Challenge";
    var text02 = "Chose the better answer for a question, if you answer correctly, another question shows up, otherwise you will lose time, total time 60 seconds";

    questionEl.textContent = text01;
    mainEl.textContent = text02;
}


setTextcodingQuizchallenge();



