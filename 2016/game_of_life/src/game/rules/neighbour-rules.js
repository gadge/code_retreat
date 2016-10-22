var _ = require('underscore');
var CellRules = require('./cell-rules');

function NeighbourRules() {
    var cellRules = new CellRules();

    this.getNeighbours = function (cell, cells) {
        var result = [];
        var rules = this;

        if (cellRules.isCellValid(cell) && !_.isEmpty(cells)) {
            result = _.filter(cells, function (currentCell) {
                return rules.isNeighbours(cell, currentCell);
            });
        }

        return result;
    };

    this.isNeighbours = function (cell1, cell2) {
        return cellRules.isCellValid(cell1) && cellRules.isCellValid(cell2) &&
            (cell1.x - 1 === cell2.x && cell1.y === cell2.y ||
            cell1.x - 1 === cell2.x && cell1.y - 1 === cell2.y ||
            cell1.x - 1 === cell2.x && cell1.y + 1 === cell2.y ||
            cell1.x + 1 === cell2.x && cell1.y === cell2.y ||
            cell1.x + 1 === cell2.x && cell1.y - 1 === cell2.y ||
            cell1.x + 1 === cell2.x && cell1.y + 1 === cell2.y ||
            cell1.x === cell2.x && cell1.y - 1 === cell2.y ||
            cell1.x === cell2.x && cell1.y + 1 === cell2.y);
    };

    this.getAllNeighbours = function(cell) {
        var result = [];
        if (cellRules.isCellValid(cell)) {
            result.push({x: cell.x - 1, y: cell.y    });
            result.push({x: cell.x - 1, y: cell.y - 1});
            result.push({x: cell.x - 1, y: cell.y + 1});
            result.push({x: cell.x + 1, y: cell.y    });
            result.push({x: cell.x + 1, y: cell.y - 1});
            result.push({x: cell.x + 1, y: cell.y + 1});
            result.push({x: cell.x,     y: cell.y - 1});
            result.push({x: cell.x,     y: cell.y + 1});
        }
        return result;
    };
}

module.exports = NeighbourRules;