var assert = require('assert');
var Task = require('../task.js');

describe('Task', function(){
    var task;

    beforeEach(function() {
        task = new Task(5, 1, 20000);
    });

    it('has a difficulty level', function(){
        assert.strictEqual(task.difficulty, 5);
    });

    it('has an urgency level', function(){
        assert.strictEqual(task.urgency, 1);
    });

    it('has a reward', function(){
        assert.strictEqual(task.reward, 20000);
    });

    it('is incomplete by default', function(){
        assert.strictEqual(task.completed, false);
    });

    it('can be completed', function(){
        task.complete();
        assert.strictEqual(task.completed, true);
    })
});