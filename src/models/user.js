const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const UserSchema = new Schema({

    identification: {
        type: String,
        required: true
    },
    nameUser: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    // password: {
    //     type: String,
    //     required: false
    // },
    typeUser: {
        type: String,
        enum: ["Estudiante", "Lider", "Administrador"],
        default:'Estudiante',
        required: true
    },
    state: {
        type: String,
        enum: ["Pendiente", "Autorizado", "No Autorizado"],
        default:'Pendiente'
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("User",UserSchema)