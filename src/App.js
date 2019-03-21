const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send(`
    <html>
      <head>
        <title>hello,react</title>
      </head>
      <body>
        <h1>first lesson</h1>
        <p>hello world</p>
      </body>
    </html>
  `)
})

app.listen(3000,()=>{
  global.console.log('server is running on port of 3000')
})

