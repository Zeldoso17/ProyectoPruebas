const mongoose = require('mongoose')

const schemaSells = new mongoose.Schema({
    Codigo: String,
    books: Array,
    fechaVenta: Date,
    branch: String,
    city: String,
    total: Number
}, {versionKey: false})

module.exports = mongoose.model('Sells', schemaSells, 'sells')