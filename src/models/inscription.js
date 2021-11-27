const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')

const InscriptionSchema = new  Schema({
    project:{
        type: String
    },
    student:{
        type: String
    },
    state:{
        type: String
    },
    dateRegister: {
        type: String
    },
    dateOut: {
        type: String,
        
    }
})

module.exports = mongoose.model("Inscription", InscriptionSchema)