var card = $("#quiz-area");

// Question
var questions = [
  {
    question: "Which fictional city is the home of Batman?",
    answers: ["Gotham City", "New York", "Toronto", "Seoul"],
    correctAnswer: "Gotham City"
  },
  {
    question: "Which type of dog has breeds called Scottish, Welsh and Irish?",
    answers: ["Terrier", "Jindo", "Shiba", "Puddle"],
    correctAnswer: "Terrier"
  },
  {
    question: "What’s the total number of dots on a pair of dice?",
    answers: [" 42", "6", "2", "62"],
    correctAnswer: "42"
  },
  {
    question: "On which mountain did Moses receive the Ten Commandments?",
    answers: ["Bear Mountian", "Himalayas", "Mount Everest", "Mount Sinai"],
    correctAnswer: "Mount Sinai"
  },
  {
    question: "What is the name of the fairy in Peter Pan?",
    answers: ["Tinkerbell.", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "Tinkerbell."
  },
  {
    question:
      "What color is the circle on the Japanese national flag?",
    answers: ["White", "Blue", "Yellow", "Red"],
    correctAnswer: "Red"
  },
  {
    question: "What is the chemical symbol for Hydrogen?",
    answers: ["S", "H", "Z", "C"],
    correctAnswer: "H"
  },
  {
    question: "Who is the author of the “Harry Potter” books?",
    answers: [" J. K. Rowling", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: " J. K. Rowling"
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});












// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);

//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);

//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Second()) + 60);
// initializeClock('clockdiv', deadline);


