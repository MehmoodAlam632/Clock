let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function displayTime() {
  const date = new Date();

  // Getting hours, mins, sec from date
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourRotation = 30 * hr + min / 2;
  let minuteRotation = 6 * min;
  let secondRotation = 6 * sec;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(displayTime, 1000);
