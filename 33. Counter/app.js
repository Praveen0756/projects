let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");
let incBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let count = 0;

incBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
