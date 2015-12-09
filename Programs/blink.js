var five = require("johnny-five"); // Carrega o Johnny-Five
var board = new five.Board(); // Carrega nova placa em board
// Quando a placa estiver pronta execute function
board.on("ready", function() {
   // Se conecta ao led no pino 13
   var led = new five.Led(13);
   // Pisca led com valor padrão (100ms)
   led.blink(100);
});


