const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer-btn");
const op = document.querySelector("#output");
const correctAnswers = ["90°", "Right Angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    op.innerText = "Your score is: " + score;
}

submitAnswerButton.addEventListener("click",calculateScore);