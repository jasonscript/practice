/**
 * find value in sorted matrix, matrix like
 * [
 *  [1, 3, 5, 15],
 *  [2, 4, 7, 16],
 *  [6, 8, 12, 25]
 * ]
 * left < right, top < bottom
 * 
 * @param {*} matrix 
 * @param {*} value 
 */
const findInMatrix = (matrix, value) => {
  let tries = 0
  const n = matrix.length
  const m = matrix[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      tries++
      if (value === matrix[i][j]) {
        return `[${i}][${j}] with ${tries} tries`
      } else if (value < matrix[i][j]) {
        if (j === 0) {
          return `not found with ${tries} tries`
        } else {
          break
        }
      }
    }
  }
  return `not found with ${tries} tries`
}

const matrix = [
  [1, 3, 8, 15],
  [4, 5, 10, 16],
  [6, 9, 12, 25]
]

console.log(findInMatrix(matrix, 7))
