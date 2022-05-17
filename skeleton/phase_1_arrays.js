//Array#uniq ([1,2,2,3,3,3].uniq() => [1,2,3])

Array.prototype.uniq = function() {
    let uniqArr = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniqArr.includes(this[i])) {
            uniqArr.push(this[i]);
        }
    }
    return uniqArr
}  

Array.prototype.twoSum = function() {
    let arr = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                arr.push(i, j)
            }
        }
    }
    return arr
}

Array.prototype.transpose = function() {
    
    const transArr = Array.from(
        {length: this[0].length},
        () => Array.from({length: this.length})
    );
    
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            transArr[j][i] = this[i][j];
        }
    }    
       return transArr;
};

// Array.prototype.transpose = function() {
//     const rows = this.length;
//     const cols = this[0].length;
//     const transArr = [];
//     for (let j = 0; j < cols; j++) {
//         grid[j] = this(rows);
//     }

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//         transArr[j][i] = this[i][j];
//         }
//     }
//     return transArr;
// };



console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());