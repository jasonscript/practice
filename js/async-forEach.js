const forEachAsync = async (arr, cb) => {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    await cb(arr[i], i)
  }
}

const forEachPromise = (arr, cb) => {
  let result = Promise.resolve()
  const length = arr.length
  for (let i = 0; i < length; i++) {
    result = result.then(() => cb(arr[i], i))
  }
}

const arr = [1, 2, 3, 4, 5, 6]

const log = (item, type) => {
  console.log(`${type}: ${item}`)
}

const asyncCallback = (item, type) => {
  return new Promise(resolve => {
    const timeout = item % 2 === 1 ? 2000 : 500
    setTimeout(() => {
      log(item, type)
      resolve()
    }, timeout)
  })
}

forEachAsync(arr, item => {
  log(item, 'async')
})
forEachPromise(arr, item => {
  log(item, 'promise')
})

forEachAsync(arr, item => asyncCallback(item, 'async'))
forEachPromise(arr, item => asyncCallback(item, 'promise'))
