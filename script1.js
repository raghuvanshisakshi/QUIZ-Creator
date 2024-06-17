const questions = [
    {
        question: "Which is largest animal in the World",
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue Whale",correct: true},
            {text: "Elephnat",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        question: "Which is largest river in the World",
        answers:[
            {text: "Amazon",correct: false},
            {text: "Nile",correct: true},
            {text: "Gnaga",correct: false},
            {text: "Bamhaputra",correct: false},
        ]
    },
    {
        question: "Which is largest animal in the World",
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue Whale",correct: true},
            {text: "Elephnat",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        question: "Which is largest animal in the World",
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue Whale",correct: true},
            {text: "Elephnat",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },

]
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score  = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score  = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            // it will add the true or false dataset
           button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer);
        })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect =selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex <questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();