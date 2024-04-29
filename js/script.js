let nameUser

function userName() {
    let title = "Введите ваше имя";
    nameUser = prompt(title, 'User');
}

userName();

const text = document.getElementById('text');
const submit = document.getElementById('submit');
const content = document.querySelector('.content');
let items = document.querySelectorAll('.item');



text.style.display = "none";
submit.style.display = "none";

let questions = [
    {
        question: "Чем известен Гастелло?",
        options: ["Бросился под танк с гарнатой", "Совешил огненный таран", "Был разведчиком в рядах фашистов"],
        correctAnswer: "Совешил огненный таран"
    },
    {
        question: "Сколько дней длилась блокада Ленинграда?",
        options: ["872", "745", "1418"],
        correctAnswer: "872 "
    },
    {
        question: "Как называли летчиков совершивших огненый таран?",
        correctAnswer: "гастелловцы"
    },
    {
        question: "Укажите кодовое название плана германского командования по захвату Советского Союза",
        options: ["Тайфун", "Барбаросса", "Смерч"],
        correctAnswer: "Барбаросса"
    },
    {
        question: "Какой орден стал первой советской наградой, учреждённой <br> в годы Великой Отечественной войны?",
        options: ["Орден Победы ", "Орден Славы", "Орден Отечественной войны"],
        correctAnswer: "Орден Отечественной войны"
    },
    {
        question: "Как называется день 22 июня в списке памятных дат России?",
        correctAnswer: "день памяти и скорби"
    },
    {
        question: "Кто прочел по радио 22 июня 1941 г. в 12 часов дня советскому народу извещение <br> о начале войны?",
        options: ["Вячеслав Молотов", "Иосиф Сталин", "Юрий Левитан"],
        correctAnswer: "Вячеслав Молотов"
    },
    {
        question: "Как называют воинов 316-й стрелковой дивизии, <br> отличившиеся в оборонительных боях под Москвой осенью 1941 года",
        correctAnswer: "панфиловцы"
    }
]

let uncorrectQuestions = [];
let currentQuestion = 0
let correctAnswers = 0


function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    let optionsElements = document.getElementById("options");
    optionsElements.innerHTML = " ";

    let answerInput = document.getElementById("answerInput");
    answerInput.innerHTML = " ";


    if ("options" in questions[currentQuestion]) {
        let optionsArray = questions[currentQuestion].options;
        optionsArray.forEach((option) => {
            let button = document.createElement("button");
            optionsElements.append(button);
            button.textContent = option;
        });
        optionsElements.addEventListener("click", (e) => {
            let target = e.target;
            nextQuestion(target.textContent);
        }, { once: true });
    } else {
        let input = document.createElement("input");
        let btn = document.createElement("button");
        btn.textContent = "Отправить ответ";
        answerInput.append(input, btn);
        btn.addEventListener((e) => {
            nextQuestion(input.value);
        });
    }



}
function nextQuestion(answer) {

    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}


function displayResult() {
    let questionElement = document.getElementById("question"); // Получить блок для размещения вопросами
    let optionsElements = document.getElementById("options"); // Получить блок для размещения кнопок
    let resultElement = document.getElementById("result"); // Получить блок для отображения результата
    let percent = (correctAnswers / questions.length) * 100
    questionElement.style.display = "none"; // Выключить видимость блока вопросов
    optionsElements.style.display = "none"; // Выключить видимость блока ответов
    if (percent < 50) {
        mark = 2;
    } else if (percent >= 50 && percent < 65) {
        mark = 3;
    } else if (percent >= 65 && percent < 85) {
        mark = 4;
    } else {
        mark = 5;
    }
    resultElement.innerHTML =
        `${nameUser}, ваша оценка ${mark}, <br>
    правильных ответов ${correctAnswers} из ${questions.length} (${Math.round(percent)} %)`
}


displayQuestion();        