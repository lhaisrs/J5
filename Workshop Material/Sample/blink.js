// Carrega o Johnny-Five
var five = require("johnny-five"); 
// Carrega nova placa em board
var board = new five.Board(); 
// Quando a placa estiver pronta execute function
board.on("ready", function() {
   // Se conecta ao led no pino 13
   var led = new five.Led(13);
   // Pisca led com valor padrão (100ms)
   led.blink(100);
});


