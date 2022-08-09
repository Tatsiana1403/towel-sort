// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let newArr = [];
    for (i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) {
            for (k = 0; k < matrix[i].length; k++) {
                newArr.push(matrix[i][k]);
            }
        }
        if (i % 2 === 1) {
            for (a = matrix[i].length - 1; a >= 0; a--) {
                newArr.push(matrix[i][a]);
            }
        }
    }

    return newArr;
};
