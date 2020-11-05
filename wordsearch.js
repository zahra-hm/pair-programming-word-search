
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(horizontalJoin)
    for (let l of horizontalJoin) {
       // console.log(l)
       if (l.includes(word))  {
           return true;
        } 
    }
        const vertical = transpose(letters);
  
        const verticalJoin = vertical.map(ls => ls.join(''))
        for (let l of verticalJoin) {
            if (l.includes(word))  {
                return true;
            }
        }
    return false;
  }
  
  const transpose = function(matrix) {
    // Put your solution here
    let newArray = [];
    for(let i = 0 ; i < matrix.length ; i++){
      for(let j = 0; j < matrix[i].length; j++){
        //console.log(matrix[i][j]) //printing everything indivually
        if(matrix[i][j] === undefined){
          continue;
        }
        //console.log(newArray[j])
        if(newArray[j] === undefined){
          newArray[j] = []
        }
  
        newArray[j][i] = matrix[i][j]
      }
    }
    return newArray;
  };
  
  
  // wordSearch([
  //     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  //     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'FRANK')
  module.exports = wordSearch
  
  //word search solver
  //a function that receives a 2D array of matrix and a word
  
  //The function must:
  //Check to find the word horizontally and vertically
  //Return true if the word is found, and return false if the word is not found
  
  
  //What if the word is written vertically, not horizontally?
  //What about the case where the word matrix is an empty array?