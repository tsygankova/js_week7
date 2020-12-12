// cобытия от юзера или браузера

const targetBtnRef = document.querySelector('.js-target-btn');
// targetBtnRef.addEventListener('click', ()=>
// {console.log ('Clicked!')
// });

const doStuffOnClick = () => {
    console.log ('Click!')
};

const addListenerRef = document.querySelector ('.js-add-listener');
addListenerRef.addEventListener ('click', ()=> {targetBtnRef.addEventListener('click', doStuffOnClick)});

const removeListenerRef = document.querySelector ('.js-remove-listener');
removeListenerRef.addEventListener ('click', () => {targetBtnRef.removeEventListener ('click', doStuffOnClick)})