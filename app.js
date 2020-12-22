const express = require('express'),
bodyParser = require('body-parser'),
fileUpload = require('express-fileupload'),
MgConnect = require('./helper/config')(),
path = require('path'),
app = express(),
port = 3000

//--- configure
app.set('view engine', 'pug')
app.set('views', 'views')


//--- Settings
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(fileUpload())

//--- Routers
const Rindex = require('./routers/index')
const Rmovies = require('./routers/movies')

app.use(Rindex)
app.use('/api/movies', Rmovies)


app.listen(port, ()=>{
    console.log(`Started server on ${port} port`);
})
