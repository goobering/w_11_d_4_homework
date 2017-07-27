var Food = function(name, replenValue){
    this.name = name;
    this.replen = replenValue;
    this.isPoison = false;
};

module.exports = Food;