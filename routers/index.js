const express = require('express'),
Router = express.Router(),
path = require('path')

Router.get('/', (req, res) =>{
    res.render('index', {
        title: 'Allmovies'
    })
})



Router.post('/upload', function(req, res) {
    let file = req.files.foo // the uploaded file object
    file.mv(path.join(`${__dirname}/../public/${req.files.foo.name}`))
    res.json({
        good: true
    })
});

module.exports = Router