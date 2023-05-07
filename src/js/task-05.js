const inputElement = document.getElementById('name-input');

function handleInputChange(event) {
  const inputValue = event.target.value;
  const outputElement = document.getElementById('name-output');

  if (inputValue === '') {
    outputElement.textContent = 'Anonymous';
  } else {
    outputElement.textContent = inputValue;
  }
}

inputElement.addEventListener('input', handleInputChange);
