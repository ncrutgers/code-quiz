

var initials;

var questionNumber = 0;// Keeps track of questions asked
var highscore;
var timerCountdown;

// Array of questions, answers, and correct answers
var questions = [
{ q: "Inside which HTML element do we put the JavaScript?", options: {option1: "script", option2: "javascript", option3: "js"}, answer: "option1"},
{ q: "How to write an IF statement in JavaScript?", options: {option1: "if i = 5", option2: "if (i == 5)", option3: "if i = 5 then"}, answer: "option2"},
{ q: "How can you add a comment in a JavaScript?", options: {option1: "< comment", option2: "'this is a comment", option3: "//This is a comment"}, answer: "option3"}
];

//start timer 
var startTime = 60;
var timer = setInterval(function() {
startTime--;
var timerSpan = document.getElementById("timer");
timerSpan.textContent = startTime;
if (startTime <= 0){
    clearInterval(timer);
}   
}, 1000);

// When the Start button is clicked page loads: timer starts and question starts
function startQuiz(){
    
    
    // Declare variables for <h2> & <label> element tags
    var headingElement = document.getElementById("heading");
    var label1Element = document.getElementById("label1");
    var label2Element = document.getElementById("label2");
    var label3Element = document.getElementById("label3");
      
  // sets heading to question   
    var question = questions[questionNumber].q;
    headingElement.textContent = question; //shows question in <h2>
    
    // adds input radio buttons to each label and adds answer options to each 
    var option1Btn = questions[questionNumber].options.option1;
    label1Element.innerHTML = "<input id='label1' type='radio' name='optradio' value='option1' checked> " + option1Btn;    
    var option2Btn = questions[questionNumber].options.option2;
    label2Element.innerHTML = "<input id='label2' type='radio' name='optradio' value='option2'> " + option2Btn;    
    var option3Btn = questions[questionNumber].options.option3;
    label3Element.innerHTML = "<input id='label3' type='radio' name='optradio' value='option3'> " + option3Btn;

}


var submitBtnElement = document.getElementById("submit");
var answer = questions[questionNumber].answer;

// When button clicked check which button pressed
submitBtnElement.addEventListener("click", function(event){
    event.preventDefault();
    var answerSelected;
    var options = document.getElementsByName('optradio');//collection of obj/array; type name optradio
    // loop runs through each option answer
    for (var i = 0; i < options.length; i++){ // i < 3
        if (options[i].checked){                
            answerSelected = options[i].value;//save checked value in variable
            //console.log(answerSelected);
        }
    } // if answered selected equals answer of current question 
    var answer = questions[questionNumber].answer;
    if (answerSelected === answer){
        document.getElementById("message").textContent = "Correct!";
        increaseScore();
        
        
    } else {
        document.getElementById("message").textContent = "Incorrect!";
        startTime-=10; // decrease time by 10 seconds            
    }
    questionNumber++;

    gameOver();
    
    //Go to next question
    startQuiz();  

});


var score = localStorage.getItem("count", 0);//correct

function increaseScore(){
    score++;    
    localStorage.setItem("count", score);
     
}
        
//When all questions are answered OR timer reaches 0
    //game is over


    
function gameOver(){  
    var currentScore;  
    if ((startTime <= 0) || (questionNumber >= questions.length)){
        window.location.href = "game-over.html";
        var scoreSpan = document.getElementById("score");        
        currentScore = localStorage.getItem("count");        
        scoreSpan.textContent = currentScore;      
    
     }

}

//When the game is over
    //then I can save my initials and score


/**document.getElementById("radio2").addEventListener("click",function(){
     alert("You pressed radio1");
});**/