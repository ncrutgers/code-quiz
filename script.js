

var initials;
var score = 0;
var highscore;
var timerCountdown;

// Array of questions and answers

var questions = [
{ q: "Inside which HTML element do we put the JavaScript?", options: {option1: "<script>", option2: "<javascript>", option3: "<js>"}, answer: "<script>"},
{ q: "Second Question.", options: {option1: "a", option2: "b", option3: "c"}, answer: "b"},
{ q: "Third Question.", options: {option1: "a", option2: "b", option3: "c"}, answer: "c"}
];

// When the Start button is clicked page loads: timer starts and question starts
function startQuiz(){
   //start timer
    var startTime = 60;
    var timer = setInterval(function() {
    startTime--;
    var timerSpan = document.getElementById("timer");
    timerSpan.textContent = startTime;
    if (startTime <= 0)
        clearInterval(timer);
    }, 1000);
  //When I answer a question I am presented with another question                    
  for (var i = 0; i < questions.length; i++){

    // sets heading to question
    var headingElement = document.getElementById("heading");
    var question = questions[i].q;
    headingElement.textContent = question;
    // sets label id for each question to a variable
    var label1Element = document.getElementById("label1");
    var label2Element = document.getElementById("label2");
    var label3Element = document.getElementById("label3");
    // adds input radio buttons to each label and adds answer options to each 
    var option1Btn = questions[i].options.option1;
    label1Element.innerHTML = "<input id=\"label1\" type=\"radio\" name=\"optradio\"> " + option1Btn;
    console.log(option1Btn);
    var option2Btn = questions[i].options.option2;
    label2Element.innerHTML = "<input id=\"label2\" type=\"radio\" name=\"optradio\"> " + option2Btn;
    console.log(option2Btn);
    var option3Btn = questions[i].options.option3;
    label3Element.innerHTML = "<input id=\"label3\" type=\"radio\" name=\"optradio\"> " + option3Btn;
    console.log(option3Btn);

    // save each radio button to each radio button variable
    var radio1Btn = document.getElementById("radio1");
    var radio2Btn = document.getElementById("radio2");
    var radio3Btn = document.getElementById("radio3");
    

    radio1Btn.addEventListener("click", function(){
        //console.log(option1Btn);
        var answers = questions[i].answer;
        if(option1Btn === answers){
            console.log("match");
            document.getElementById("message").textContent = "Correct!";
            
            
            
        } else {
            console.log("no match");
            document.getElementById("message").textContent = "Wrong Answer!";
        }

    });

    radio2Btn.addEventListener("click", function(){
        //console.log(option2Btn);
        var answers = questions[i].answer;
        if(option2Btn === answers){
            console.log("match");
            document.getElementById("message").textContent = "Correct!";
            
        } else {
            console.log("no match");
            document.getElementById("message").textContent = "Wrong Answer!";
        }
        
    });

    radio3Btn.addEventListener("click", function(){
        //console.log(option3Btn);
        var answers = questions[i].answer;
        if(option3Btn === answers){
            console.log("match");
            document.getElementById("message").textContent = "Correct!";
            
        } else {
            console.log("no match");
            document.getElementById("message").textContent = "Wrong Answer!";
        }
    });


    

  }
}




//startQuiz();



        
//When all questions are answered OR timer reaches 0
    //game is over


//When the game is over
    //then I can save my initials and score


/**document.getElementById("radio2").addEventListener("click",function(){
     alert("You pressed radio1");
});**/