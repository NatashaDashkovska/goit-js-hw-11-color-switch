const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStartRef: document.querySelector('button[data-action="start"]'),
  btnEndRef: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

refs.btnStartRef.addEventListener('click', start);
refs.btnEndRef.addEventListener('click', stop);

let interval;

function start() {
  refs.btnStartRef.setAttribute('disabled', true);
  refs.btnStartRef.classList.add('disabled');
  interval = setInterval(() => {
    refs.bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function stop() {
  clearInterval(interval);
  refs.btnStartRef.removeAttribute('disabled');
  refs.btnStartRef.classList.remove('disabled');
}
