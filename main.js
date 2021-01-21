const quizDB = [
    {
        question: "Q1: HTML is what type of language ?",
        a: "Scripting Language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Network Protocol",
        ans: "ans1"
    },

    {
        question: "Q2: The year in which HTML was first proposed _______.",
        a: "1990",
        b: "1980",
        c: "1995",
        d: "2000",
        ans: "ans1"
    },

    {
        question: "Q3: Apart from &lt;b&gt; tag, what other tag makes text bold ?",
        a: "&lt;fat&gt;",
        b: "&lt;strong&gt;",
        c: "&lt;black&gt;",
        d: "&lt;emp&gt;",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of HTML?",
        a: "HyperText Markup Language",
        b: "Hyper Teach Markup Language",
        c: "Hyper Tech Markup Language",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q5: Who is Known as the father of World Wide Web (WWW)?",
        a: "Robert Cailliau",
        b: "Tim Thompson",
        c: "Charles Darwin",
        d: "Tim Berners-Lee",
        ans: "ans4"
    },
    {
        question: "Q6: What tag is used to display a picture in a HTML page?",
        a: "picture",
        b: "image",
        c: "img",
        d: "src",
        ans: "ans3"
    },
    {
        question: "Q7: HTML web pages can be read and rendered by _________.",
        a: "Compiler",
        b: "Server",
        c: "Web Browser",
        d: "Interpreter",
        ans: "ans3"
    },
    {
        question: "Q8: Which of the following is not a browser ?",
        a: "Microsofts Bing",
        b: "Netscape Navigator",
        c: "Mozilla Firefox",
        d: "Opera",
        ans: "ans1"
    },

    {
        question: "Q9: How can you open a link in a new browser window?",
        a: "&lt;a href=\"url\" new&gt;",
        b: "&lt;a href=\"url\" target=\"new\"&gt;",
        c: "&lt;a href=\"url\" target=\"_blank\"&gt;",
        d: "&lt;a href=\"url\" target=\"\"&gt;",
        ans: "ans3"
    },

    {
        question: "Q10:  _________ keyword is used to declare variables in javascript.",
        a: "Dim",
        b: "Var",
        c: "String",
        d: "None of the above",
        ans: "ans2"
    }

];

const startbtn = document.querySelector("#start-btn");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const name = document.getElementById("#name");

const answers = document.querySelectorAll(".answer");

let questionCount = 0, score = 0;

const startquiz = () => {
    startbtn.addEventListener("click", () => {
        document.getElementById("start").style.display = "none";
        document.getElementById("question-cnt").style.display = "grid";
        startquestionload();

    });

};


const startquestionload = () => {
    //console.log(quizDB[0].question);
    // question.innerHTML=quizDB[0].question;
    //console.log(quizDB[0].a);

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
};


startquiz();

const deselectOption = () => {
    answers.forEach((curOptionSelect) => {
        curOptionSelect.checked = false;
    });
};

const getCheckAnswer = () => {
    let answer;
    //checkoptionSelectfromoption1tolastoption
    answers.forEach((curOptionSelect) => {
        if (curOptionSelect.checked) {
            answer = curOptionSelect.id;
        }
    });
    return answer;
};


submit.addEventListener("click", () => {
    const checker = getCheckAnswer();
    console.log(checker);
    if (checker === quizDB[questionCount].ans)
        score++;

    questionCount++;
    //remove the selected option in next question
    deselectOption();
    if (questionCount < quizDB.length - 1)
        startquestionload();
    else if (questionCount < quizDB.length) {
        submit.innerHTML = "submit";
        startquestionload();
    }
    else {
        scoreDisplay.innerHTML = `
        <img src="./images/crown.png" alt="crown" id="crown">
        <h1>Congratulations! 🌟 <br>${document.getElementById("name").value}</h1>
        <h3>Your score is ${score}/${quizDB.length} 👏</h3>
        <button class="reload" onclick="location.reload()">Play Again</button>`
            ;
        document.getElementById("question-cnt").style.display = "none";
        document.getElementById("score-cnt").style.display = "grid";
    }
});