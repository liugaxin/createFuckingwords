const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateMrmr = require('./generate')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({ defauLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const mrmr = generateMrmr(options)
  res.render('index', { mrmr: mrmr, options: options })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
