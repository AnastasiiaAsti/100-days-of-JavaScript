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
}