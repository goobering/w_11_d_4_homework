var Rat = function(){
}

Rat.prototype = {
    touchFood: function(food){
        food.isPoison = true;
    }
}

module.exports = Rat;