// Напиши скрипт, який виконає наступні операції.

// 1) Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// 3) Для кожного елемента li.item в списку ul#categories, знайде і
//  виведе в консоль текст заголовка елемента (тега h2) і
//   кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4
const allItemiesFromCategories = document.querySelectorAll('.item');
console.log(`У списку '${allItemiesFromCategories.length}' категорії.`);

const amountCategory = allItemiesFromCategories.forEach(el => {
console.log(`Категорія: ${el.firstElementChild.textContent}.`),
console.log(`Кількість елементів: ${el.lastElementChild.childElementCount}.`)
});
console.log(amountCategory);