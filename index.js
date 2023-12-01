const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended:false})

const port = 3001

app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', async(req, res) => {
  res.json('website-b')
})
app.get('/trigger-webhook-event', async(req, res) => {

  try {
    // do something to trigger website a
  const data = {
    secret: "rahasia123",
    event: "event-a",
}
  const response = await fetch('http://localhost:3000/github-event5', {
    method:'POST' ,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })

  //return success
  res.json('event success')
  } catch (error) {
    console.error(error)
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})