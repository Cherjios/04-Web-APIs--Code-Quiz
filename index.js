var mainEl = document.getElementById("main");


function setTextcodingQuizchallenge (){
    var text01 = "Start Quiz Challenge";
    var text02 = "Chose the better answer for a question, if you answer correctly, another question shows up, otherwise you will lose time, total time 60 seconds";
    var paragraph = document.createElement("p");
    var node = document.createTextNode(text02);
    paragraph.appendChild(node);


    mainEl.textContent = text01;
    mainEl.setAttribute("class", "text-top");
    mainEl.appendChild(paragraph);
}



setTextcodingQuizchallenge();



