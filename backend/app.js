const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.json({"message":'hello'})
});
app.post('/', (req, res) => {
    res.send('Got a POST request')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})