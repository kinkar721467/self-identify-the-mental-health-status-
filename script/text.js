const questions = [
    {
        questions: "How often do you feel overwhelmed or unable to cope with daily tasks?",
        answers: [
            {text: "Rarely", correct: false},
            {text: "Sometimes", correct: true},
            {text: "Often", correct: false},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "Do you frequently experience changes in your appetite or weight, unrelated to dieting or exercise?",
        answers: [
            {text: "Never", correct: false},
            {text: "Occasionally", correct: false},
            {text: "Frequently", correct: true},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "How often do you feel persistently sad, empty, or hopeless?",
        answers: [
            {text: "Rarely", correct: true},
            {text: "Sometimes", correct: false},
            {text: "Often", correct: false},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "Do you struggle with sleep, either sleeping too much or too little?",
        answers: [
            {text: "Never", correct: false},
            {text: "Occasionally", correct: false},
            {text: "Frequently", correct: true},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "Are you easily agitated, irritable, or have difficulty controlling anger?",
        answers: [
            {text: "Rarely", correct: true},
            {text: "Sometimes", correct: false},
            {text: "Often", correct: false},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "Do you find it challenging to concentrate or make decisions?",
        answers: [
            {text: "Rarely", correct: false},
            {text: "Sometimes", correct: true},
            {text: "Often", correct: false},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "How often do you isolate yourself from friends, family, or social activities?",
        answers: [
            {text: "Rarely", correct: false},
            {text: "Sometimes", correct: false},
            {text: "Often", correct: false},
            {text: "Always", correct: true},
        ]
    },
    {
        questions: "Are you frequently experiencing physical symptoms such as headaches, stomachaches, or other unexplained pains?",
        answers: [
            {text: "Never", correct: false},
            {text: "Occasionally", correct: true},
            {text: "Frequently", correct: false},
            {text: "Always", correct: false},
        ]
    },
    {
        questions: "Do you have recurring thoughts of death or suicide, even if you don't have a specific plan?",
        answers: [
            {text: "Never", correct: false},
            {text: "Occasionally", correct: false},
            {text: "Frequently", correct: false},
            {text: "Always", correct: true},
        ]
    },
    {
        questions: "How often do you feel worthless or guilty without reason?",
        answers: [
            {text: "Rarely", correct: false},
            {text: "Sometimes", correct: false},
            {text: "Often", correct: true},
            {text: "Always", correct: false},
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function  showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore() {
    resetState();
    const averageScore = score / questions.length;
    let healthStatus = '';

    if (score >= 8) {
        healthStatus = 'Excellent mental health';
    } else if (score >= 5 && score < 8) {
        healthStatus = 'Good mental health';
    } else {
        healthStatus = 'Not good mental health';
    }

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br> Your mental health status: ${healthStatus}`;
    nextButton.innerHTML = "text Again";
    nextButton.style.display = "block";

    const avgElement = document.createElement("p");
    avgElement.innerHTML = `Average Score: ${averageScore.toFixed(2)}`;
    questionElement.appendChild(avgElement);
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();