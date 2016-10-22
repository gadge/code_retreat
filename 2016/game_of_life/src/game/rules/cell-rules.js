var _ = require('underscore');

function CellRules() {
    this.isCellValid = function (cell) {
        return !_.isUndefined(cell) && !_.isUndefined(cell.x) && !_.isUndefined(cell.y);
    }
}

module.exports = CellRules;