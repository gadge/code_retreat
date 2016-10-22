describe('Neighbour rules tests', function () {

    var NeighbourRules = require('../../../src/game/rules/neighbour-rules');
    var Cell = require('../../../src/game/cell/cell');

    var cell, neighbourRules;

    beforeEach(function () {
        cell = new Cell(0, 0);
        neighbourRules = new NeighbourRules();
    });

    describe('#isNeighbours', function () {
        it('should return false for invalid arguments', function() {
            expect(neighbourRules.isNeighbours()).toBe(false);
            expect(neighbourRules.isNeighbours({})).toBe(false);
            expect(neighbourRules.isNeighbours({x:0})).toBe(false);
            expect(neighbourRules.isNeighbours({x:0, y: 0})).toBe(false);
            expect(neighbourRules.isNeighbours(cell, {x:0, y: 0})).toBe(false);
        });
        it('should check if given cell is a neighbour', function () {
            expect(neighbourRules.isNeighbours(cell, {x: 1,  y: -1})).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: 1,  y: 0 })).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: 1,  y: 1 })).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: -1, y: -1})).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: -1, y: 0 })).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: -1, y: 1 })).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: 0,  y: -1})).toBe(true);
            expect(neighbourRules.isNeighbours(cell, {x: 0,  y: 1 })).toBe(true);

            expect(neighbourRules.isNeighbours(cell, {x: 0,  y: 2 })).toBe(false);
        });
    });

    describe('#Neighbour count', function () {
        it('should return 0 neighbours for invalid parameters', function () {
            expect(neighbourRules.getNeighbours().length).toBe(0);
            expect(neighbourRules.getNeighbours({}).length).toBe(0);
            expect(neighbourRules.getNeighbours([]).length).toBe(0);
            expect(neighbourRules.getNeighbours({}, {}).length).toBe(0);
            expect(neighbourRules.getNeighbours({}, []).length).toBe(0);
            expect(neighbourRules.getNeighbours(undefined, {}).length).toBe(0);
            expect(neighbourRules.getNeighbours(undefined, []).length).toBe(0);
            expect(neighbourRules.getNeighbours([{x: 0, y: 0}]).length).toBe(0);
        });
        it('should return 1 neighbour', function () {
            expect(neighbourRules.getNeighbours(cell, [{x: 0, y: 1}]).length).toBe(1);
        });
        it('should return 2 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 1, y: 1}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(2);
        });
        it('should return 3 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(3);
        });
        it('should return 4 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: -1, y: 0}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(4);
        });
        it('should return 5 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 0, y: -1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: -1, y: 0}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(5);
        });
        it('should return 6 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 0, y: -1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 1, y: -1}, {x: -1, y: -1}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(6);
        });
        it('should return 7 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 0, y: -1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 1, y: -1}, {x: -1, y: -1}, {x: -1, y: 0}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(7);
        });
        it('should return 8 neighbours', function () {
            var cells = [{x: 0, y: 1}, {x: 0, y: -1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 1, y: -1}, {x: -1, y: -1}, {x: -1, y: 0}, {x: -1, y: 1}];
            expect(neighbourRules.getNeighbours(cell, cells).length).toBe(8);
        });
    });


});