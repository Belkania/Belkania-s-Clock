const darkModeBtn = document.getElementById("toggle");
const clock = document.getElementById("clock");
const hourNiddle = document.getElementById("hour");
const minuteNiddle = document.getElementById("minute");
const secondNiddle = document.getElementById("second");
const timeBox = document.getElementById("time");
const dateBox = document.getElementById("date");

const setTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const hourRotation = formattedHours * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  secondNiddle.style = `transform: rotate(${secondRotation}deg);`;
  hourNiddle.style.transform = `rotate(${hourRotation}deg)`;
  minuteNiddle.style = `transform: rotate(${minuteRotation}deg);`;
  console.log(hourRotation, minuteRotation, secondRotation);

  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  timeBox.innerText = formattedTime;
};

const setDate = (date) => {
  const dateStr = date.toDateString();

  dateBox.innerText = dateStr;
};

const toogleOnClick = (e) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
};

function checkAndUpdateTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    toggleTheme();
  } else {
    document.body.classList.remove("dark");
    clock.classList.remove("dark");
  }
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      toggleTheme(); // Apply dark mode if system preference changes to dark
    } else {
      // Remove dark mode if system preference changes to light
      document.body.classList.remove("dark-mode");
      clock.classList.remove("dark-mode");
    }
  });

toggle.addEventListener("click", toogleOnClick);

setInterval(() => {
  const date = new Date();
  setTime(date);
  setDate(date);
}, 1000);

checkAndUpdateTheme();
