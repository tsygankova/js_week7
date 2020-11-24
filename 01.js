console.log (window)

console.log (window.document)

//Поиск DOM 

//querySelector находит первый совпавший

const titleRef = document.querySelector('.page-title');
console.log (titleRef)

const listEl = document.querySelector ('li')

console.log (listEl)

//querySelectorAll - собирает все элементы, подходящие по критериям

const listsRef = document.querySelectorAll ('.list')
console.log (listsRef)

// к парным тегам применимо .textContext

titleRef.textContent = 'Добро пожаловать в ад'

console.dir (titleRef)

titleRef.className = 'h1';

console.dir (titleRef);

console.log (titleRef.getAttribute('class'))

//classlist и его атрибуты

console.log (titleRef.classList.contains('innerText'))
console.log (listEl.classList.contains('list'))

