const express = require('express'),
schemaMovies = require('../model/schemaMovies'),
Router = express.Router()

Router.get('/', async (req, res) =>{
    const dbMovies = await schemaMovies.find({})
    res.render('movies', {
        title: 'Все филмы',
        dbMovies
    })
})

Router.post('/', async (req, res) =>{
    let newMovies = await new schemaMovies(req.body)
    let newPhoto = await req.files.photo
    newMovies.photo = await newPhoto.name
    newMovies.published = await req.body.published === 'on' ? true : false
    newMovies.save((err) =>{
        if(err) console.log(err);
        else{
            newPhoto.mv(`${__dirname}/../public/upload/images/${newPhoto.name}`, (err) =>{
                if(err) console.log(err);
                else res.redirect('/api/movies')
            })
        }
    })
})

Router.get('/add', (req, res) =>{
    res.render('add_movies', {
        title: 'Добавить книги'
    })
})

Router.get('/:movie_id', async (req, res) =>{
    let movie_id = req.params.movie_id
    let movie_db = await schemaMovies.findById(movie_id)
    res.render('view_movie', {
        title: `Смотреть ${movie_db.name}`,
        movie_db,
        m_none: true
    })
})

Router.delete('/:movie_id', async (req, res) =>{
    let movie_id = req.params.movie_id
    schemaMovies.findByIdAndDelete(movie_id, (err, data) =>{
        if(err) res.json({success: false, err: err});
        else{
            res.json({
                success: true
            })
        }
    })
})

Router.put('/:movie_id', async (req, res) =>{
    let movie_id = req.params.movie_id
    let newMovie = req.body
    newMovie.published = req.body.published === 'on' ? true : false
    newMovie.photo = req.files.photo.name
    schemaMovies.findByIdAndUpdate(movie_id, newMovie, (err, data) =>{
        if(err){
            console.log(err)
            res.json({
                err
            })
        }
        else{
            req.files.photo.mv(`${__dirname}/../public/upload/images/${newMovie.photo}`, (err) =>{
                res.json({
                    success: true
                })
            })
        } 
    })
})



module.exports = Router