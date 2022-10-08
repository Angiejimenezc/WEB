(function(){
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  console.log(titleQuestions)

  titleQuestions.forEach(question =>{
      question.addEventListener('click', ()=>{
          let height = 0;
          //encuentra el siguiente elemento
          let answer = question.nextElementSibling;
          //obtiene el padre de la pregunta
          let addPadding = question.parentElement.parentElement;

          //añade o quita el padding botton
          addPadding.classList.toggle('questions__padding--add');
          //rota la flecha
          question.children[0].classList.toggle('questions__arrow--rotate');

          if(answer.clientHeight === 0){
            //La función scrollHeigth me da el alto mínimo para que el elemento exista, por lo que se añadío paddin y margin en la clase.
              height = answer.scrollHeight;
          }

          answer.style.height = `${height}px`;
      });
  });
})();