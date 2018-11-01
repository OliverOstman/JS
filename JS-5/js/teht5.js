let hours, minutes, seconds;
const p = document.getElementById('kello');

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function clock() {
  var d = new Date();
  hours = addZero(d.getHours());
  minutes = addZero(d.getMinutes());
  seconds = addZero(d.getSeconds());
  p.innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);