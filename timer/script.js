
var countDownTime = 16;
var x = setInterval(function() {
  countDownTime--;
  document.getElementById("time1").innerHTML = countDownTime + "s ";
  if (countDownTime <= 0) {
    clearInterval(x); 
    document.getElementById("time1").innerHTML = "Time's up!";
  }
}, 1000);

var countDownTime2 = 31;
var x2 = setInterval(function() {
  countDownTime2--;
  document.getElementById("time2").innerHTML = countDownTime2 + "s ";
  if (countDownTime2 <= 0) {
    clearInterval(x2); 
    document.getElementById("time2").innerHTML = "Time's up!";
  }
}, 1000);

var countDownTime3 = 61;
var x3 = setInterval(function() {
  countDownTime3--;
  document.getElementById("time3").innerHTML = countDownTime3 + "s ";
  if (countDownTime3 <= 0) {
    clearInterval(x3); 
    document.getElementById("time3").innerHTML = "Time's up!";
  }
}, 1000);