const http = require('http')
const fs = require('fs')

const port = 1337

fs.readFile('./src/index.html', (err, html) => {
  if (err) throw err

  http.createServer((request, response) => {
    response.writeHeader(200, { 'Content-Type': 'text/html' })
    response.write(html)
    response.end()
  }).listen(port)

  console.log(`Server is running on port ${port}.`)
})
