var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.pulse();
  this.wait(10000, function() {
    led.stop().off();
  });
});
