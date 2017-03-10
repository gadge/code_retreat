var Game = require('./game/game');
var Canvas = require('./canvas/canvas');

var game = new Game();
var canvas = new Canvas();

function Main() {
    this.run = function() {

        console.log('Starting generation:\n');
        var generation = [
            {x: 0, y: 0}, {x: 1, y: 0}, {x: -1, y: 1}, {x: -2, y: 0}
        ];
        console.log(' .  \n');
        console.log('. ..\n');

        canvas.draw();

        //this.generateGenerations(3, generation);
    };

    this.generateGenerations = function(numberOfCycles, generation) {
        for (var i = 1; i <= numberOfCycles; i++) {
            console.log('generation #' + i);
            generation = game.getNextGeneration(generation);

            console.info(generation);
        }
    };
}

var main = new Main();

main.run();
