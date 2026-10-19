// 1. Подключаем normalize.css
import 'normalize.css';

// 2. Подключаем ваши основные стили (Sass)
import '../styles/main.scss';

// 3. Подключаем картинку (если она нужна вам в JS-коде)
// Если вы пока не используете hero.png в JavaScript, можете закомментировать эту строку
import heroImg from '../assets/hero.png';

// --- ВАШ КОД НИЖЕ ---

console.log('Проект успешно запущен!');

// Пример простого вывода на страницу, чтобы проверить, что всё работает
const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    <h1>Мой новый проект на Vite</h1>
    <p>Всё работает отлично!</p>
    <img src="${heroImg}" alt="Hero Image" style="max-width: 100%; height: auto; margin-top: 20px;">
  `;
}

import Swiper from 'swiper';
import 'swiper/css'; // Базовые стили
import 'swiper/css/navigation'; // Стили для стрелок
import 'swiper/css/pagination'; // Стили для точек

const swiper = new Swiper('.swiper', {
  // Основные настройки
  loop: true,
  // Если нужны стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Если нужна пагинация
  pagination: {
    el: '.swiper-pagination',
  },
});