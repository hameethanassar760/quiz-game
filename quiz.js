const questions[
    {
        question:"which is the largest animal in the world?",
        answers:[
            {Text: "shark",correct:false},
            {Text:"blue whale",correct:true},
            {Text:"elephent",correct:false},
            {Text:"giraffe",correct:false},
        ]
    },
    {
        question:"which is the largest desert in the world?",
        answers:[
            {Text:"sahara",correct:false},
            {Text:"kalahari",correct:true},
            {Text:"kunjan",correct:false},
            {Text:"rajasthan",correct:false},
        ]
    },
    {
        question:"which is the largest continent in the world?",
        answers:[
            {Text:"africa",correct:false},
            {Text:"asia",correct:true},
            {Text:"america",correct:false},
            {Text:"antarctica",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerElement=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next");

let currentQuestionIndex=0;
let score=0;
function startquiz(){
     currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answer-button.appendchild("button");
        
    });
    startquiz()
}