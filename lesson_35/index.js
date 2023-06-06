function tester ({ main, ...rest }) {
  console.log({main})
  console.log(rest)
}

const tested = {
  main: 'here is the main',
  foo: 'foo, u know',
  bar: 'bar it'
}

tester(tested)
