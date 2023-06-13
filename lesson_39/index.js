console.log('hi')

function * generator () {
  yield 1
  console.log('wut')
  yield 2
  console.log('uwu')
  return 0
}

const iterator = generator()

console.log(iterator)

console.log('---------')
console.log(iterator.next())
console.log('---------')
console.log(iterator.next())
console.log('---------')
console.log(iterator.next())
console.log('---------')
