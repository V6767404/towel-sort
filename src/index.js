
// You should implement your task here.

module.exports = function towelSort (matrix) {
      const result = [];
    let count = 0;
    if (!matrix) {
        return [];
    } else if (matrix.length === 0) {
        return [];
    } else {
        for (i = 0; i < matrix.length; i++) {
            if ([i] % 2 !== 0) {
                matrix[i].reverse();
            }
            for (j = 0; j < matrix[i].length; j++) {
                // result.push(matrix[i][j]);
                result[count] = matrix[i][j];
                count = count + 1;

            }

        }

        return result;
    }
}
