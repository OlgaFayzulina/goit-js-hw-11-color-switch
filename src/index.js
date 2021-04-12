
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

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

let setIntervalId = null;

refs.startBtn.addEventListener('click', () => {
   setIntervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, 5)]
   }, 1000);
    refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(setIntervalId);
    refs.startBtn.disabled = false;
})