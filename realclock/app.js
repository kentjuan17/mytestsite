// Selectors
const hourLabel = document.querySelector(".hours");
const minuteLabel = document.querySelector(".minutes");
const secondLabel = document.querySelector(".seconds");
// const amPMLabel = document.querySelector(".ampm");

hourLabel.textContent = 12;
minuteLabel.textContent = 25;
secondLabel.textContent = 59;
// amPMLabel.textContent = "PM";

setInterval(function () {
  const date = new Date();
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  //   console.log([hour, minutes, seconds]);
  hourLabel.textContent = `${String([hour]).padStart(2, 0)}`;
  minuteLabel.textContent = `${String([minutes]).padStart(2, 0)}`;
  secondLabel.textContent = `${String([seconds]).padStart(2, 0)}`;
  //   amPMLabel.textContent = "PM";
}, 1000);
