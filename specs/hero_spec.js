var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero', function(){
    var hero;
    var testFood, testFavouriteFood;
    var testTask1, testTask2, testTask3;

    beforeEach(function(){
        hero = new Hero('testHero1', 'testFavouriteFood1');
        testFood = new Food('testfood1', 20);
        testTask1 = new Task(1, 2, 50000);
        testTask2 = new Task(2, 3, 100000);
        testTask3 = new Task(3, 4, 5000000);
        testFavouriteFood = new Food('testFavouriteFood1', 20);

        hero.acceptQuest(testTask3);
        hero.acceptQuest(testTask2);
        hero.acceptQuest(testTask1);
    });

    it('has a name', function(){
        assert.strictEqual(hero.name, 'testHero1');
    });

    it('has health', function(){
        assert.strictEqual(hero.health, 100);
    });

    it('has a favourite food', function(){
        assert.strictEqual(hero.favFood, 'testFavouriteFood1');
    });

    it('can talk', function(){
        assert.strictEqual(hero.talk(), 'My name is testHero1');
    });

    it('can accept tasks', function(){
        hero.acceptQuest(testTask1);
        assert.strictEqual(hero.tasks.length, 4);
    });

    it('can eat food', function(){
        hero.eat(testFood);
        assert.strictEqual(hero.health, 120);
    });

    it('can eat favourite food', function(){
        hero.eat(testFavouriteFood);
        assert.strictEqual(hero.health, 130);
    });

    it('can sort quests by urgency', function(){
        hero.sortQuestsBy('urgency');
        assert.deepEqual(hero.tasks, [testTask1, testTask2, testTask3]);
    });

    it('can sort quests by difficulty', function(){
        hero.sortQuestsBy('difficulty');
        assert.deepEqual(hero.tasks, [testTask1, testTask2, testTask3]);
    })

    it('can sort quests by reward', function(){
        hero.sortQuestsBy('reward');
        assert.deepEqual(hero.tasks, [testTask1, testTask2, testTask3]);
    })

    it('can complete quests', function(){
        hero.complete(testTask1);
        assert.deepEqual(hero.quests(true), [testTask1]);
        hero.complete(testTask2);
        // Tasks were added to Hero in reverse order
        assert.deepEqual(hero.quests(true), [testTask2, testTask1]);
    });

    it('can view complete or incomplete quests', function(){
        hero.complete(testTask1);
        assert.deepEqual(hero.quests(true), [testTask1]);
        // Tasks were added to Hero in reverse order
        assert.deepEqual(hero.quests(false), [testTask3, testTask2]);
    });

    it('can lose health eating regular poisonous food', function(){
        testFood.isPoison = true;
        hero.eat(testFood);
        assert.strictEqual(hero.health, 80);
    });

    it('can lose health eating favourite poisonous food', function(){
        testFavouriteFood.isPoison = true;
        hero.eat(testFavouriteFood);
        assert.strictEqual(hero.health, 80);
    });
});