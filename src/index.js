
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix == undefined){
        return [];
    }
    let newArr = matrix.map(function(currentValue, index){
        if(index % 2 != 0){
            return currentValue.reverse();
        }else{
            return currentValue;
        }
    });
    let concatArr = [];
    concatArr = [].concat(...newArr);
    return concatArr;
}
