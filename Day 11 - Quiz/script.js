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