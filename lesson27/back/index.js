const express = require('express')

const app = express()

app.listen('5000', () => {
  console.log('server is running on localhost')
})

app.get('/', (request, response) => {
  console.log(request, response)
  response.send('<h1>Hello, karpych1717!</h1>')
})
