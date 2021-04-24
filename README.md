# ms-code-quiz
Build a word guessing game using JavaScript and Web APIs.

## Getting Started
Code: [Code](https://github.com/manzur-shaheed/ms-code-quiz)

Live: [github pages](https://manzur-shaheed.github.io/ms-code-quiz/)

You can clone code from [github link](https://github.com/manzur-shaheed/ms-code-quiz) and run it locally on your computer.

### Prerequisites

A computer with browser that supports javascript. To clone code from github, you need to have aceess to Internet. Also your computer should have Terminal (Unix) software installed. For Windows users, you can get it from https://www.cygwin.com/. For Mac users, it comes pre-installed with MacOS. 

### Installing

- Open a terminal.  
- Create a directory for this project.
- Change current directory to this project direcory.
- Issue the following command -

```
git clone git@github.com:manzur-shaheed/ms-code-quiz.git
```
You can then run this tool by opening index.html page from this directory in a browser.

## Deployment

The following animation demonstrates the application functionality - it starts with a set of questions and a timer which counts down in every second. User is presented with the first multiple choice question to pick one choice, if (s)he is correct, a 'Right 👍' message flushes for half a second, otherwise a 'Wong 👎' messages flushes for half a second and 10 seconds is deducted from the timer. The application then moves to next question. The game ends when timer reaches to 0 or there is no more question left to present. At this point user receives time left (if any) as his/her score and is presented with a screen to enter his/her name. Application records this score and displays scoreboard with score sorted in descending order. At this point user can play again or clear scoreboard altogether.  

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./assets/images/ms-code-quiz.gif)



## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Acknowledgments
* **Billie Thompson** - [PurpleBooth](https://github.com/PurpleBooth) for the README Template.
