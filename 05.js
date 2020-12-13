// событие отправки формы

 const formRef = document.querySelector ('.js-register-form');

 formRef.addEventListener ('submit', event => {
     event.preventDefault();
    //  console.log ('submit!');
    // //  console.dir (event.target.elements)
    //  const formElements = event.target.elements

    //  //вывести конкретные данные
    // console.log (formElements.email.value)

    // //вывести все данные
    // const formData1 = {
    //     name: formElements.name.value,
    //     email: formElements.email.value,
    //     password: formElements.password.value,
    //     subscription: formElements.subscription.value
    // }

    // console.log (formData1)

    // // конструктор formData()

    const formRef = event.target;
    const formData = new FormData (formRef);

    console.log (formData);
    formData.forEach (value, key) => {
        console.log ('value:', value);
        console.log ('key', key);
    }

 })

 