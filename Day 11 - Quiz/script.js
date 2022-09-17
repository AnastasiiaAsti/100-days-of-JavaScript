// create a quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

//create question class

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

//display question

function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        //show question
        let questionEl = document.getElementById("question");
        questionEl.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceEl = document.getElementById("choice" + i);
            choiceEl.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

//guess function 

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}


//show quiz progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressEl = document.getElementById("progress");
    progressEl.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//show score

function showScores() {
    let quizEndHTML =
        `
        <h1>Quiz Completed</h1> 
        <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length} </h2>
        <div class="quiz-repeat">
            <a class="btn" href="index.html">Take Quiz Again</a>
        </div>
    `;
    let quizEl = document.getElementById("quiz");
    quizEl.innerHTML = quizEndHTML;
}

// create quiz questions

let questions = [
    new Question(
        "How many measures of Gordon's Gin are in a Vesper (James Bond) martini?",
        ['1', '2', '3', '4'],
        '3'
    ),
    new Question(
        "Cacio & Pepe is a staple of what Italian city's cuisine?",
        ['Rome', 'Napoli', 'Valencia', 'Sicily'],
        'Rome'
    ),
    new Question(
        "Where did sushi originate?",
        ['Japan', 'China', 'Thailand', 'Vientman'],
        "China"
    ),
    new Question(
        "What is a Beaujolais?",
        ['A type of white wine', 'A type of brandy', 'A type of red wine', 'A type of sauce'],
        'A type of red wine'
    ),
    new Question(
        "Which of the following sauces is NOT traditionally vegan - Hoisin, Worcestershire, Mustard, Wasabi?",
        ['Hoisin', 'Worcestershire', 'Mustard', 'Wasabi'],
        'Worcestershire'
    ),
    new Question(
        "What is the world's best-selling stout beer?",
        ['Beamish', 'Donnybrook', 'Abraxas', 'Guinness'],
        'Guinness'
    ),
    new Question(
        'What country drinks the most coffee?',
        ['USA', 'Italy', 'Finland', 'France'],
        'Finland'
    ),
    new Question(
        "What meat is used in a shepherd's pie?",
        ['Lamb', 'Beef', 'Pork', 'Rabbit'],
        'Lamb'
    ),
    new Question(
        'What is the difference between brandy and cognac?',
        ['Difference in how it is aged', 'While Cognac is twice distilled using a pot still, Brandy undergoes column distillation', 'No difference', 'Cognac must come from the Cognac region of France'],
        'Cognac must come from the Cognac region of France'
    ),
    new Question(
        'Pink Ladies and Granny Smiths are types of what fruit?',
        ['Pears', 'Apples', 'Plums', 'Two different fruits'],
        'Apples'
    )
]

let quiz = new Quiz(questions);

//display question

displayQuestion();

//add a countdown