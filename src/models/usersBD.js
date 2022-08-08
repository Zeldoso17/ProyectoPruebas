const mongoose = require('mongoose')

const schemaUser = new mongoose.Schema({
    name: String,
    lastName: String,
    rol: String,
})

module.exports = mongoose.model("Users", schemaUser, 'users')