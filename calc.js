document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.calculator button');
    let currentInput = '0';
  
    keys.forEach(key => {
      key.addEventListener('click', () => {
        const keyValue = key.textContent;
        
        if (keyValue === 'C') {
          currentInput = '0';
        } else if (keyValue === '=') {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = 'Error';
          }
        } else {
          if (currentInput === '0' || currentInput === 'Error') {
            currentInput = keyValue;
          } else {
            currentInput += keyValue;
          }
        }
  
        display.value = currentInput;
      });
    });
  });
  