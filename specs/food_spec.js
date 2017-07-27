var assert = require('assert');
var Food = require('../food.js');

describe('Food', function(){
    var food;

    beforeEach(function() {
        food = new Food('testFood1', 20);
    });

    it('has a name', function(){
        assert.strictEqual(food.name, 'testFood1');
    });

    it('has a replenishment value', function(){
        assert.strictEqual(food.replen, 20);
    });

    it('isPoison is false', function(){
        assert.strictEqual(food.isPoison, false);
    })
});

    