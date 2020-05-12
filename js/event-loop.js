async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
  setTimeout(function () {
    console.log('async2 setTimeout')
  }, 0)
}

async function async3 () {
  console.log('async3')
}

console.log('script start')

setTimeout(async function () {
  console.log('setTimeout1 start')
  await async3()
  console.log('setTimeout1 end')
}, 0)

async1().then(function () {
  console.log('async1 after')
}).then(function () {
  console.log('async1 after2')
})

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')

/**
 * output *
 * 
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * async1 after
 * promise3
 * async1 after2
 * setTimeout1 start
 * async3
 * setTimeout1 end
 * async2 setTimeout
 */
