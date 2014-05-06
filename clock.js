function Clock() {

}

Clock.prototype.run = function() {
  var date = new Date();

  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var interval = 5;

  function tick() {
    if (secs + interval >= 60) {
      mins += 1;
      secs += interval;
      secs -= 60;
    } else {
      secs += interval;
    }

    if (mins === 60) {
      hours += 1;
      mins = 0;
    }

    if (hours === 24) {
      hours = 0;
    }
    console.log("Time is: " + hours + ":" + mins + ":" + secs);
  }

  setInterval(tick, 5000);
}

c = new Clock();
c.run();