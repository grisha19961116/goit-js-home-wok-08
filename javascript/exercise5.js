// Завдання 5
// Напиши скрипт який, при наборі тексту в інпут
//  input#name-input (подія input), підставляє його поточне
//   значення в span#name-output. якщо інпут порожній,
//    в спані повинен відображатися рядок 'незнайомець'.

{/* <input type="text" placeholder="" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */}
const refForAddElem = document.querySelector('body');
const input = document.createElement('input');
input.classList.add('input-class');
input.id = "name-input";
input.setAttribute('placeholder',"Ваше ім'я?");
input.setAttribute('type',"text");
refForAddElem.appendChild(input);
const textP = document.createElement('h1');
textP.classList.add('h-class');
const spanInTextP = document.createElement('span');
const lableAtention = ' !';
const firstMeaning = 'незнайомець'
spanInTextP.textContent = firstMeaning + lableAtention;

textP.textContent = `Привіт , `
spanInTextP.id = "name-output";
spanInTextP.classList.add('h-class__span')
textP.appendChild(spanInTextP);
refForAddElem.appendChild(textP);
const changeInput = (event) => {
   spanInTextP.textContent = event.target.value + lableAtention;
   return spanInTextP;
}
input.addEventListener('change',changeInput)

console.log(refForAddElem)