const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: 'Error', path: '/zxcz'})
  // sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
