/**
 * [['a', 'b', 'c', ...], ['0', ...], ['m', 'n', ...], ...] => ['a0m', 'a0n', 'b0m', 'b0n', 'c0m', 'c0n', ...]
 */
const joinArrayString = arr => {
  if (arr.length === 1) {
    return arr[0]
  }
  const firstArr = arr[0]
  const secondArr = arr[1]
  const joined = []
  if (firstArr.length === 0) {
    joined.push(...secondArr)
  } else if (secondArr.length === 0) {
    joined.push(...firstArr)
  } else {
    firstArr.forEach(a => {
      secondArr.forEach(b => {
        joined.push(`${a}${b}`)
      })
    })
  }
  return joinArrayString([joined, ...arr.slice(2)])
}

console.log(joinArrayString([['a', 'b', 'c'], ['0', '1'], ['m', 'n', 'p', 'q']]))
