const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    for (const line of letters) {
        line.reverse();
    }

    const reverseHorizontalJoin = letters.map(ls => ls.join(''))
    for (l of reverseHorizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }


    for (const line of vertical) {
        line.reverse();
    }
    const reverseVerticalJoin = vertical.map(ls => ls.join(''))
    for (l of reverseVerticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    return false;
}



const transpose = function(matrix) {
    const newMatrix = [];
    for (let y = 0; y < matrix[0].length; y++) {
    console.log(matrix[y]) // to remove
    newMatrix[y] = [];
    for (let x = 0; x < matrix.length; x++) {
        newMatrix[y].push(matrix[x][y]);
    }
    }
    return newMatrix;
};

module.exports = wordSearch
