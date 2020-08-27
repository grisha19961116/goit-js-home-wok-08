// Задача 2
// 1) просто не решена. callback map не возвращает console.log
// 2) вставлять нужно за 1 действие

// В JS є масив рядків.

const ingredient = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву
//  ingredients створить окремий li,
//  після чого вставить всі li за одну операцію 
//  в список ul.ingredients. Для створення DOM-вузлів
//   використовуй document.createElement().
const fragment = document.createDocumentFragment();
const ready = document.querySelector('#ingredients');




const dinamic = ingredient.forEach((elem) => {
      const elemLi = document.createElement('li');
      elemLi.textContent = elem;
      elemLi.classList.add('second');
      fragment.appendChild(elemLi);
    });

ready.appendChild(fragment);

// одна дія як і просив,і консоль повертає!


