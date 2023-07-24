const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const homeContoller = require('./controllers/home')
const aboutController = require('./controllers/about')


app.get('/', homeContoller)
app.get('/about', aboutController)

app.listen(8080);
console.log('Server is listening on port 8080!')