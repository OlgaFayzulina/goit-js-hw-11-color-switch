
const refs = {
    bodyEl: document.querySelector('body'),
    startBtnEl: document.querySelector('[data-action="start"]'),
    stopBtnEl: document.querySelector('[data-action="stop"]')
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

refs.startBtnEl.addEventListener('click', () => {
   setIntervalId = setInterval(() => {
        refs.bodyEl.style.background = colors[randomIntegerFromInterval(0, 5)]
   }, 1000);
    refs.startBtnEl.disabled = true;
});

refs.stopBtnEl.addEventListener('click', () => {
    clearInterval(setIntervalId);
    refs.startBtnEl.disabled = false;
})