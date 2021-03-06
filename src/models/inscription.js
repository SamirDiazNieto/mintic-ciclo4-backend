const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')

const InscriptionSchema = new  Schema({
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    student:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    state:{
        type: String,
        enum: ["Pendiente", "Aceptado", "Rechazado"],
        default:'Pendiente'
    },
    dateRegister: {
        type: Date
    },
    dateOut: {
        type: Date
    }
})

module.exports = mongoose.model("Inscription", InscriptionSchema)