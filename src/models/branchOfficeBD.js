const mongoose = require('mongoose')

const schemaBranchOffice = new mongoose.Schema({
    name: String,
    location: {},
    city: String,
    books: Array
}, {versionKey: false})

schemaBranchOffice.index({ location: '2dsphere' })

module.exports = mongoose.model('Branches', schemaBranchOffice, 'branches')