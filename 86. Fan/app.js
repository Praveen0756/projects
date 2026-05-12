const fan = document.getElementById("fan");
const toggleBtn = document.getElementById("toggleBtn");
const speedBtn = document.getElementById("speedBtn");
const led = document.getElementById("led");
const bars = document.querySelector(".bars");
const mist = document.querySelector(".mist");

const motorSound = document.getElementById("motorSound");
const windSound = document.getElementById("windSound");

let isOn = false;
let speed = 1;

function update() {
  fan.className = "fan";
  bars.className = "bars";
  mist.classList.remove("on");

  motorSound.pause();
  windSound.pause();

  if (isOn) {
    led.classList.add("on");
    mist.classList.add("on");

    motorSound.play().catch(() => {});
    windSound.play().catch(() => {});

    if (speed === 1) {
      fan.classList.add("on", "low");
      bars.classList.add("active", "low");
    }

    if (speed === 2) {
      fan.classList.add("on", "medium");
      bars.classList.add("active", "medium");
    }

    if (speed === 3) {
      fan.classList.add("on", "high");
      bars.classList.add("active", "high");
    }
  } else {
    led.classList.remove("on");
  }
}

toggleBtn.addEventListener("click", () => {
  isOn = !isOn;
  toggleBtn.textContent = isOn ? "Power OFF" : "Power ON";
  update();
});

speedBtn.addEventListener("click", () => {
  speed++;
  if (speed > 3) speed = 1;

  speedBtn.textContent = `Speed: ${speed}`;
  update();
});
