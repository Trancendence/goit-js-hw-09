function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const changeButton = document.querySelector('button.change-color')
  const body = document.querySelector('body')

  
  changeButton.addEventListener('click', e => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;

    
  })









// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
