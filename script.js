const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav')

burgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active')
});

const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
    mainNav.classList.remove('active');
    });
});

const myName = "Александр";
let greetingText = "Привет, ";

console.log(myName);
console.log(greetingText);

const now = new Date();
const hour = now.getHours();

console.log("Текущий час:", hour)

if (hour >= 5 && hour <= 11) {
    greetingText = "Доброе утро";
} else if (hour >= 12 && hour <= 17) {
    greetingText = "Добрый день";
} else if (hour >= 18 && hour <=22) {
    greetingText = "Добрый вечер";
} else {
    greetingText = "Доброй ночи";
}

function formatGreeting(greeting, name) {
    const fullGreeting = `${greeting}, ${name}!`;
    return fullGreeting;
}

const finalGreeting = formatGreeting(greetingText, myName);

console.log(finalGreeting);

const greetingDisplay = document.getElementById('dynamicGreeting');

if (greetingDisplay) {
    greetingDisplay.innerText = finalGreeting;
}

 /* const projects = [
    {
        title: "Секция услуг с карточками",
        description: "Дизайн и адаптивная вёрстка секции услуг с красивыми карточками, демонстрирующими различные предложения.",
        link: "service-cards.html"
    },
    {
        title: "Адаптивный макет портфолио",
        description: "Первая работа, выполненная строго по макету, с полностью адаптивным дизайном и удобным 'бургер-меню'.",
        link: "adaptive-portfolio.html"
    }
]; */

const portfolioContainer = document.getElementById('portfolio-container');

async function fetchProjects() {
    try {
        const username = "gintoman-web";
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();

let projectsHTML = '';
data.forEach(repo => {
    const projectCardHTML = `
    <div class="servicecard">
    <h3>${repo.name}</h3>
    <p>${repo.description || "Описание отсутствует."}</p>
    <a href="${repo.html_url}" target="_blank">
    <button>Посмотреть на GitHub</button>
    </a>
</div>
`;
projectsHTML += projectCardHTML;
});

if (portfolioContainer) {
    portfolioContainer.innerHTML = projectsHTML;
}
} catch (error) {
    console.error("Ошибка при загрузке проектов.", error);
    if (portfolioContainer) {
        portfolioContainer.innerHTML = '<p>Не удалось загрузить проекты. Пожалуйста, попробуйте позже.</p>';
    }
}
}

fetchProjects();

const clickButton = document.getElementById('clickMeButton');
const countDisplay = document.getElementById('clickCountDisplay');
const contactsSection = document.getElementById('contacts-section');

let clickCount = 0;

function changeStyle() {
    if (contactsSection) {
        contactsSection.classList.toggle('highlight-contacts');
        console.log("Класс 'highlight-contacts' переключен.");
    }
}

function incrementCounter() {
    clickCount = clickCount +1;
    countDisplay.innerText = clickCount;
    console.log("Кнопка нажата. Счетчик: ", clickCount);

    changeStyle();
}

if (clickButton) {
    clickButton.addEventListener('click', incrementCounter);
}

function showMyName() {
    const name = "Александр";
    console.log("Мое имя из функции: " + name);
}
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

showMyName ();

let roomArea = calculateArea(10, 5);
console.log("Площадь комнаты: " + roomArea + " кв. м. ");

console.log("Площадь другого участка: " + calculateArea(7, 8) + " кв. м . ");

const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '' ) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        } 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.value)) {
            alert("Пожалуйста, введите корректный адрес электронной почты.");
            return;
        }
        {
            alert('Форма успешно отправлена!');
            contactForm.reset();
        }
    });
}

