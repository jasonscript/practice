const fs = require('fs')

const promisify = fn => {
  return function (path) {
    return new Promise((resolve, reject) => {
      fn.call(null, path, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

const pReadFile = promisify(fs.readFile)

pReadFile('../README.md')
  .then(data => {
    console.log(data.toString())
  })
  .catch(err => {
    console.log(err)
  })

async function test () {
  try {
    const data = await pReadFile('../README.md')
    console.log(data.toString())
  } catch (err) {
    console.log(err)
  }
}

test()
