const INTERVAL_MS = 10;

let timerId = null;
let startTime = 0;
let elapsedTime = 0;

const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (timerId) return;

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  startTime = Date.now();

  timerId = setInterval(updateTimer, INTERVAL_MS);
}

function stopTimer() {
  if (!timerId) return;

  elapsedTime += Date.now() - startTime;

  clearInterval(timerId);
  timerId = null;

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerId);

  timerId = null;
  startTime = 0;
  elapsedTime = 0;

  timer.textContent = "00:00:000";

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

function updateTimer() {
  const current = elapsedTime + (Date.now() - startTime);

  const minutes = Math.floor(current / 60000);
  const seconds = Math.floor((current % 60000) / 1000);
  const ms = current % 1000;

  timer.textContent = `${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(ms, 3)}`;
}

function pad(num, size) {
  return String(num).padStart(size, "0");
}
