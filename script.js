// Pseudocode:
// create nav bar with name of game, option to view scores, and remaining time.!
// done in html
// create title page with button to start game(title page is all centered)!

// create modular button class to streamline question development
// create hidden <div></div> with text that shows wrong or right depending on answer
// include functionality so that button answers change
// create objectArray, with questions as object!
// code individual question objects, with individual choices for each object!
// include ticking down clock in right corner, time taken with wrong answer !/
// when question is wrong, take time away and display wrong
// when time is up, display game over screen with form with 1 dropdown that for name!
// save name in local storage!
// include names in high score page

// Variables:
var seconds = 75;
var time = document.getElementById("time");
// this is the score/time element featured in the top right corner. It ticks down at rate of one per second
// and will go down by 10 immediately if question is wrong.
var questionsArr = [
  {
    question: "What is Javascript?",
    answers: [
      "A programming language",
      "A form of writing which uses coffee beans",
      "A content delivery network",
      "The script for a play about the island of Java"
    ],
    answer: "A programming language"
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Tax Man Larry",
      "Highly Technical Managing Language",
      "Hyper Text Markup Language",
      "Half To Mario Link"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is not an example of a Content Delivery Network?",
    answers: ["Bootstrap", "Cloudflare", "Google", "Streamzilla"],
    answer: "Google"
  },
  {
    question: "What should you do first when coding?",
    answers: [
      "Code the entire project",
      "Pseudocode",
      "Buy coffee",
      "Question your ability to code correctly"
    ],
    answer: "Pseudocode"
  }
];
// this is the array containing each of the question objects.
var startBtn = document.getElementById("start-button");
// refers to the start button
var startPage = document.getElementById("start-page");
// refers to the start page
var questionDiv1 = document.getElementById("question-div1");
var questionDiv2 = document.getElementById("question-div2");
var questionDiv3 = document.getElementById("question-div3");
var questionDiv4 = document.getElementById("question-div4");
// refers to the divs containing the question elements
var hiddenDiv = document.getElementById("correct-wrong");
// refers to the div containing the correct/wrong dialogue
var scorescreen = document.getElementById("score-screen");
// refers to the score-screen dialogue
var submitScore = document.getElementById("score-submit");
// refers to the submit-score button
var NameValue = document.getElementById("exampleNameInput");
// Refers to the saved name/score value
var resultPage = document.getElementById("Results");
var lastResult = document.getElementById("score1");
var lastName = localStorage.getItem("Name-Value")
var lastScore = localStorage.getItem("Hi-Score")
var newResult = document.getElementById("scoreNow")


// Functions:

function setTime() {
  time.textContent = seconds;
  var timerInterval = setInterval(function() {
    seconds--;
    time.textContent = "Time: " + seconds;

    if (seconds < 1) {
      clearInterval(timerInterval);
      questionDiv1.setAttribute("style", "display: none");
      questionDiv2.setAttribute("style", "display: none");
      questionDiv3.setAttribute("style", "display: none");
      questionDiv4.setAttribute("style", "display: none");
      hiddenDiv.setAttribute("style", "display: none");
      resultPage.setAttribute("style", "display: none");
      scorescreen.setAttribute("style", "display: block");
      localStorage.setItem("Hi-Score", 0);
    }
  }, 1000);
}
// Modified from activity  04-09

function timerSubtract() {
  if (seconds < 10) {
    return;
  } else {
    seconds -= 10;
  }
}

function timerStop() {
  var timerInterval = setInterval(function() {
    time.textContent = "Time: " + seconds;
  });
  localStorage.setItem("Hi-Score", seconds);
  
  clearInterval(timerInterval);
}

startBtn.addEventListener("click", function() {
  startPage.setAttribute("style", "display: none");

  questionDiv1.setAttribute("style", "display: block");
  hiddenDiv.setAttribute("style", "display: block");
  setTime();
  question1();
});

function question1() {
  var questionTitle = document.createElement("h2");
  questionTitle.textContent = questionsArr[0].question;
  questionDiv1.append(questionTitle);
  var questionBox1 = document.createElement("button");
  questionBox1.classList.add("btn-primary");
  questionBox1.textContent = questionsArr[0].answers[0];
  questionDiv1.append(questionBox1);
  var questionBox2 = document.createElement("button");
  questionBox2.classList.add("btn-primary");
  questionBox2.textContent = questionsArr[0].answers[1];
  questionDiv1.append(questionBox2);
  var questionBox3 = document.createElement("button");
  questionBox3.classList.add("btn-primary");
  questionBox3.textContent = questionsArr[0].answers[2];
  questionDiv1.append(questionBox3);
  var questionBox4 = document.createElement("button");
  questionBox4.classList.add("btn-primary");
  questionBox4.textContent = questionsArr[0].answers[3];
  questionDiv1.append(questionBox4);

  questionBox1.addEventListener("click", function() {
    hiddenDiv.textContent = "Correct!";
    question2();
  });
  questionBox2.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question2();
  });
  questionBox3.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question2();
  });
  questionBox4.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question2();
  });
}

function question2() {
  questionDiv1.setAttribute("style", "display: none");
  questionDiv2.setAttribute("style", "display: block");

  var questionTitle = document.createElement("h2");
  questionTitle.textContent = questionsArr[1].question;
  questionDiv2.append(questionTitle);
  var questionBox1 = document.createElement("button");
  questionBox1.classList.add("btn-primary");
  questionBox1.textContent = questionsArr[1].answers[0];
  questionDiv2.append(questionBox1);
  var questionBox2 = document.createElement("button");
  questionBox2.classList.add("btn-primary");
  questionBox2.textContent = questionsArr[1].answers[1];
  questionDiv2.append(questionBox2);
  var questionBox3 = document.createElement("button");
  questionBox3.classList.add("btn-primary");
  questionBox3.textContent = questionsArr[1].answers[2];
  questionDiv2.append(questionBox3);
  var questionBox4 = document.createElement("button");
  questionBox4.classList.add("btn-primary");
  questionBox4.textContent = questionsArr[1].answers[3];
  questionDiv2.append(questionBox4);

  questionBox3.addEventListener("click", function() {
    hiddenDiv.textContent = "Correct!";
    question3();
  });
  questionBox1.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question3();
  });
  questionBox2.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question3();
  });
  questionBox4.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question3();
  });
}

function question3() {
  questionDiv2.setAttribute("style", "display: none");
  questionDiv3.setAttribute("style", "display: block");

  var questionTitle = document.createElement("h2");
  questionTitle.textContent = questionsArr[2].question;
  questionDiv3.append(questionTitle);
  var questionBox1 = document.createElement("button");
  questionBox1.classList.add("btn-primary");
  questionBox1.textContent = questionsArr[2].answers[0];
  questionDiv3.append(questionBox1);
  var questionBox2 = document.createElement("button");
  questionBox2.classList.add("btn-primary");
  questionBox2.textContent = questionsArr[2].answers[1];
  questionDiv3.append(questionBox2);
  var questionBox3 = document.createElement("button");
  questionBox3.classList.add("btn-primary");
  questionBox3.textContent = questionsArr[2].answers[2];
  questionDiv3.append(questionBox3);
  var questionBox4 = document.createElement("button");
  questionBox4.classList.add("btn-primary");
  questionBox4.textContent = questionsArr[2].answers[3];
  questionDiv3.append(questionBox4);

  questionBox3.addEventListener("click", function() {
    hiddenDiv.textContent = "Correct!";
    question4();
  });
  questionBox2.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question4();
  });
  questionBox1.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question4();
  });
  questionBox4.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    question4();
  });
}

function question4() {
  questionDiv3.setAttribute("style", "display: none");
  questionDiv4.setAttribute("style", "display: block");

  var questionTitle = document.createElement("h2");
  questionTitle.textContent = questionsArr[3].question;
  questionDiv4.append(questionTitle);
  var questionBox1 = document.createElement("button");
  questionBox1.classList.add("btn-primary");
  questionBox1.textContent = questionsArr[3].answers[0];
  questionDiv4.append(questionBox1);
  var questionBox2 = document.createElement("button");
  questionBox2.classList.add("btn-primary");
  questionBox2.textContent = questionsArr[3].answers[1];
  questionDiv4.append(questionBox2);
  var questionBox3 = document.createElement("button");
  questionBox3.classList.add("btn-primary");
  questionBox3.textContent = questionsArr[3].answers[2];
  questionDiv4.append(questionBox3);
  var questionBox4 = document.createElement("button");
  questionBox4.classList.add("btn-primary");
  questionBox4.textContent = questionsArr[3].answers[3];
  questionDiv4.append(questionBox4);

  questionBox2.addEventListener("click", function() {
    hiddenDiv.textContent = "Correct!";
    questionDiv4.setAttribute("style", "display: none");
    hiddenDiv.setAttribute("style", "display: none");
    scorescreen.setAttribute("style", "display: block");
    timerStop();
  });
  questionBox3.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    questionDiv4.setAttribute("style", "display: none");
    hiddenDiv.setAttribute("style", "display: none");
    scorescreen.setAttribute("style", "display: block");
    timerStop();
  });
  questionBox1.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    questionDiv4.setAttribute("style", "display: none");
    hiddenDiv.setAttribute("style", "display: none");
    scorescreen.setAttribute("style", "display: block");
    timerStop();
  });
  questionBox4.addEventListener("click", function() {
    hiddenDiv.textContent = "Wrong!";
    timerSubtract();
    questionDiv4.setAttribute("style", "display: none");
    hiddenDiv.setAttribute("style", "display: none");
    scorescreen.setAttribute("style", "display: block");
    timerStop();
  });
}

submitScore.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("Name-Value", NameValue.value);
  scorescreen.setAttribute("style", "display: none");
  resultPage.setAttribute("style", "display: block");
  lastResult.textContent = lastName + " " + lastScore; 
  newResult.innerHTML = "Your score was: " + seconds + ". The most recent score is below."
});
