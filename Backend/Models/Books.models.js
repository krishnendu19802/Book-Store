const mongoose = require('mongoose')

const Bookschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    publishYear: {
        type: Number,
        required: true
    }
})

const Book = mongoose.model('Book', Bookschema)
module.exports = Book