// create a quiz class
class Quiz {
    construct(questions) {
        this.score = 0;
        this.questions = question;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions(this.questionIndex)
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
        this.answer = answer
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
        let questionEl = document.getElementById('question');
        questionEl.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceEl = document.getElementById('choice' + i);
            choiceEl.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
};

//guess function 

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}


//show quiz progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressEl = document.getElementById('progress');
    progressEl.innerHTML = `Question ${currentQuestionNumber} of ${quiz.question.length}`;
}

