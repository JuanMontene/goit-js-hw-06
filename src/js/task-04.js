let counterValue = 0;
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function increment() {
  counterValue++;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue--;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
