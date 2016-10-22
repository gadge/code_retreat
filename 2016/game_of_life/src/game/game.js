var _ = require('underscore');
var NeighbourRules = require('./rules/neighbour-rules');

function Game() {
    var neighbourRules = new NeighbourRules();

    this.getNextGeneration = function(currentCells) {
        var result = [];

        result = result.concat(this.getAliveCells(currentCells));

        return result.concat(this.getNewCells(currentCells));
    };

    /**
     * Gets only cells that will stay alive in next generation (have 2 or 3 neighbours).
     */
    this.getAliveCells = function (cells) {
        return _.filter(cells, function (cell) {
            var neighboursCount = neighbourRules.getNeighbours(cell, cells).length;
            if (neighboursCount === 2 || neighboursCount === 3) {
                return cell;
            }
        });
    };

    /**
     * Gets cells that are dead, but will come to life (dead and has 3 neighbours).
     */
    this.getNewCells = function (cells) {
        var result = [];
        var game = this;

        _.each(cells, function (cell) {
            result = result.concat(_.filter(game.getDeadNeighbours(cell, cells), function (cell) {
                return !_.findWhere(result, cell) ? neighbourRules.getNeighbours(cell, cells).length === 3 : [];
            }));
        });
        return result;
    };

    this.getDeadNeighbours = function (cell, cells) {
        var allNeighbours = neighbourRules.getAllNeighbours(cell);

        var aliveNeighbours = neighbourRules.getNeighbours(cell, cells);

        // removes aliveNeighbours from allNeighbours
        return _.filter(allNeighbours, function (cell) {
            return !_.findWhere(aliveNeighbours, cell);
        });
    };
}

module.exports = Game;