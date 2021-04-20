// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var i;

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// utility functions 
function hide(element) {
  element.classList.add('hide');
}

function show(element) {
  element.classList.remove('hide');
}

function displayTime() {
  timerEl.textContent = time;
}

// timer start
function startTimer() {
  timerId = setInterval(function() {
    time--;
    timerEl.textContent = time;
    if (time >= 0) {
      // win?
      if (wonGame && time > 0) {
        clearInterval(timer);
        gameStatus('win');
      }
      // time has run out
      if (time === 0) {
          clearInterval(timer);
          gameStatus('lost');
      }
    }
  }, 1000);
}

function startQuiz() {
  // hide start screen
  hide(document.getElementById("start-screen"));
 
  // un-hide questions section
  show(document.getElementById("questions"));

  // start timer
  // startTimer();

  // show starting time
  displayTime();

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var question = questions[currentQuestionIndex];
  var ol, btn;

  // update title with current question
  document.getElementById("question-title").textContent = question.title;

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // create ordered list
  ol = document.createElement("ol");
  choicesEl.appendChild(ol);  

  // loop over choices
  for (i = 0; i< question.choices.length; i++) {
    // create new button for each choice
    btn = document.createElement("button");
    btn.textContent = question.choices[i];
    btn.id = "btn" + i.toString();
  
    // attach click event listener to each choice
    btn.onclick = questionClick;

    // display on the page  
    ol.appendChild(btn);
  }
}

function questionClick(event) {
  var userChoice = event.target.textContent;
  console.log(event.target.textContent);

  // check if user guessed wrong
  if (userChoice !== questions[currentQuestionIndex].answer) {
    // penalize time by 5sec
    time -= 5;

    // display new time on page
    displayTime();

    // play "wrong" sound effect
    sfxWrong.play();
    feedbackEl.textContent = "Wrong 👎 ";
  }
  // else 
  else {
    // play "right" sound effect
    sfxRight.play();
    feedbackEl.textContent = "Right 👍";
  }

  // flash right/wrong feedback on page for half a second
  show(feedbackEl);

  // move to next question

  // check if we've run out of questions
    // quizEnd
  // else 
    // getQuestion
}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
