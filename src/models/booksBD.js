const mongoose = require('mongoose')

const schemaLibros = new mongoose.Schema({
    ISBN: String,
    title: String,
    author: String,
    category: String,
    stock: Number,
}, {versionKey: false})

module.exports = mongoose.model('Books', schemaLibros, 'books')