var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('Rat', function(){
    var rat, testFood1;

    beforeEach(function(){
        testRat = new Rat();
        testFood1 = new Food('testFood1', 20);
    });

    it('can poison food', function(){
        testRat.touchFood(testFood1);
        assert.strictEqual(testFood1.isPoison, true);
    });
})