// Завдання 4
// Лічильник складається зі спана і кнопок, 
// які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде 
// зберігається поточне значення лічильника.
// Створи функції increment і decrement для 
// збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

// убрав ретурни і почитав за них


const counter = document.createElement('div');
counter.classList.add('wrapper-for-counter');
const value = document.createElement('span');
value.textContent = 0;

const incrementFn = () => {
  value.textContent = Number(value.textContent) + 1;
} ;
const increment = document.createElement('button');
increment.textContent = '+1';
increment.addEventListener('click',incrementFn);

const decrementFn = () => {
  value.textContent = Number(value.textContent) - 1;
};
const decrement = document.createElement('button');
decrement.textContent = '-1';
decrement.addEventListener('click',decrementFn)

const counterTree = document.querySelector('body');
const readyCounter = counterTree.appendChild(counter);

const insideReadyCounterDecrement = readyCounter.appendChild(decrement);
insideReadyCounterDecrement.classList.add('first-btn');

const insideReadyCounterValue = readyCounter.appendChild(value);
insideReadyCounterValue.classList.add('value-cllas');

const insideReadyCounterIncrement = readyCounter.appendChild(increment);
insideReadyCounterIncrement.classList.add('second-btn');
