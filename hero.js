var _ = require('lodash');

var Hero = function(name, favFood){
    this.name = name;
    this.health = 100;
    this.favFood = favFood;
    this.tasks = [];
}

Hero.prototype = {
    talk: function(){
        return "My name is " + this.name;
    },
    eat: function(foodItem){
        if(foodItem.isPoison){
            this.health -= foodItem.replen;
            return;
        }
        if(foodItem.name === this.favFood){
            this.health += foodItem.replen * 1.5;
        } else {
            this.health += foodItem.replen;
        };
    },
    acceptQuest: function(task){
        this.tasks.push(task);
    },
    sortQuestsBy: function(trait){
        this.tasks = _.sortBy(this.tasks, trait);
    },
    complete: function(task){
        _.find(this.tasks, task).complete();
    },
    quests: function(isComplete){
        return _.filter(this.tasks, {completed: isComplete});
    }
};

module.exports = Hero;