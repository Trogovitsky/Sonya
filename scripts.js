// ===== Печатающийся текст =====
const typingTexts = [
  "Привет, эти цветы для тебя",
  "Всё, что я хотел показать, не уместилось бы на карточке",
  "Хочу узнать хочешь ли ты вернуть всё, я видел что ты удалила наши фотки с канала 19 июня и другие"
];
const typingElement = document.getElementById("typing-text");
const cursorElement = document.querySelector(".cursor");

let textIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
  if (charIndex < typingTexts[textIndex].length) {
    typingElement.textContent += typingTexts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= typingTexts.length) textIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

// Запуск
document.addEventListener("DOMContentLoaded", function() {
  if (typingTexts.length) {
    setTimeout(type, newTextDelay + 250);
  }
});

// ===== Слайдер =====
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});
