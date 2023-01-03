function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const changeButton = document.querySelector('button.change-color')
  const body = document.querySelector('body')
  const stopButton = document.querySelector('button.stop')
  
  changeButton.addEventListener('click', e => {
    changeButton.attr('disabled', true); 
    setInterval(() => {
        let color = getRandomHexColor();
        body.style.backgroundColor = color;
    }, 1000);
 
    })
    
