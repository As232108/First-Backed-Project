require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Aman',(req, res )=>{
    res.send('Hello Aman')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})