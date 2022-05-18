const NUMS = [1, 2, 3, 4, 5];


Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        // callback(this[i]);
        console.log(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    const mapArr = [];

    this.myEach(element => mapArr.push(callback(element)));

    return mapArr
};

console.log(NUMS.myMap( num => num * num ));