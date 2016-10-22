var _ = require('underscore');
var Game = require('../../src/game/game');

describe('Game tests', function () {

    var game;

    beforeEach(function () {
        game = new Game();
    });

    describe('#getAliveCells', function () {
        it('should get only cells that stay alive', function () {
            var currentGeneration = [
                {x:  0, y:  0}, {x: -1, y: -1}, {x: -1, y:  1},
                {x: 10, y: 10}, {x:  9, y:  9}, {x:  9, y: 11}];
            var aliveCells = game.getAliveCells(currentGeneration);
            expect(aliveCells.length).toBe(2);
            expect(aliveCells[0]).toEqual({x:  0, y:  0});
            expect(aliveCells[1]).toEqual({x: 10, y: 10});
        });
    });

    describe('#getNewCells', function () {
        it('should get cells that will come to life', function () {
            var currentGeneration = [
                {x:  0, y:  0}, {x: -1, y: -1}, {x: -1, y:  1},
                {x: 10, y: 10}, {x:  9, y:  9}, {x:  9, y: 11}];
            var aliveCells = game.getAliveCells(currentGeneration);
            expect(aliveCells.length).toBe(2);
            expect(aliveCells[0]).toEqual({x:  0, y:  0});
            expect(aliveCells[1]).toEqual({x: 10, y: 10});
        });
    });

    describe('#getDeadNeighbours', function () {
        it('should get only dead neighbours', function () {
            var currentGeneration = [{x:  0, y:  0}];
            var deadNeighbours = game.getDeadNeighbours({x: 0, y: 0}, currentGeneration);
            expect(deadNeighbours.length).toBe(8);

            currentGeneration = [{x:  0, y:  0}, {x:  0, y:  1}];
            deadNeighbours = game.getDeadNeighbours({x: 0, y: 0}, currentGeneration);
            expect(deadNeighbours.length).toBe(7);
        });
    });

    describe('#Next generations', function () {
        it('should generate empty next generation from empty generation', function () {
            expect(game.getNextGeneration([])).toEqual([]);
        });
        describe('#Alive cell', function () {
            describe('Neighbours: 1', function () {
                it('should not be in next generation', function () {
                    var currentGeneration = [{x: 0, y: 0}, {x: 0, y: 1}];
                    expect(game.getNextGeneration(currentGeneration).length).toBe(0);
                    expect(game.getNextGeneration(currentGeneration)).toEqual([]);
                });
            });
            describe('Neighbours: 2', function () {
                it('should be in next generation', function () {
                    var currentGeneration = [{x: -1, y: -1}, {x: 0, y: 0}, {x: 1, y: 1}];
                    expect(game.getNextGeneration(currentGeneration).length).toBe(1);
                    expect(_.findWhere(game.getNextGeneration(currentGeneration), {x: 0, y: 0})).toBeDefined();
                });
            });
            describe('Neighbours: 3', function () {
                it('should be in next generation', function () {
                    var currentGeneration = [{x: 0, y: 0}, {x: -1, y: -1}, {x: -1, y: 1}, {x: 1, y: 1}];
                    expect(_.findWhere(game.getNextGeneration(currentGeneration), {x: 0, y: 0})).toBeDefined();
                });
            });
            describe('Neighbours: 4', function () {
                it('should not be in next generation', function () {
                    var currentGeneration = [{x: 0, y: 0}, {x: -1, y: -1}, {x: -1, y: 1}, {x: 1, y: 1}, {x: 1, y: -1}];
                    expect(_.findWhere(game.getNextGeneration(currentGeneration), {x: 0, y: 0})).not.toBeDefined();
                });
            });
        });
    });

});