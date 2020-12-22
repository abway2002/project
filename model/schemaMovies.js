const mongoose = require('mongoose'),
Schema = mongoose.Schema

const schemaMoives = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    imdb: {
        type: Number,
        default: 0
    },
    photo: {
        type: String
    },
    published: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('movies', schemaMoives)