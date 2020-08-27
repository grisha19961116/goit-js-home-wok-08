// Завдання 6
// Напиши скрипт, який би при втраті фокуса на інпут,
//  перевіряв його вміст на правильну кількість символів.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символів"
/> */}
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,
//    якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.
const conectBody = document.querySelector('body');
const input = document.createElement('input');
conectBody.appendChild(input);
input.id = "validation-input";
input.setAttribute('type',"text");
input.setAttribute('placeholder',"Введи 6 символів");
input.setAttribute('data-length',"6");
const focusInput = (event) =>{
  if(event.target.selectionStart == input.getAttribute('data-length')){
    input.classList.remove('invalid');
   return input.classList.add('valid');
  } 
  input.classList.add('invalid')
}
input.addEventListener('change',focusInput)

console.log(conectBody);
console.dir(input);
console.log(input.getAttribute('data-length'));

