const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended:false})

const port = 3000

app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
    const username = 'mufid'
    const password = '221202'

    //return semua kondisi
    if(req.body.username !== username) {
        res.json({
            status : 'error, username not found'})
    }

    if(req.body.password !== password) {
        res.json({status: 'error, wrong password'})
}


    res.json({ status: 'success'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})