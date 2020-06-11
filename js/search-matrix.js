const searchMatrix = (matrix, target) => {
  const searchArray = (arr) => {
    let low = 0
    let high = arr.length - 1
    let mid
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      if (arr[mid] === target) {
        return true
      }
      if (arr[mid] > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return false
  }
  
  let low = 0
  let high = matrix.length - 1
  let mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (matrix[mid][0] === target) {
      return true
    }
    if (matrix[mid][0] > target) {
      high = mid - 1
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      low = mid + 1
    } else {
      return searchArray(matrix[mid])
    }
  }
  return false
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

console.log(searchMatrix(matrix, 3))
console.log(searchMatrix(matrix, 13))
