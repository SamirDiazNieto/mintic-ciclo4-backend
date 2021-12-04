const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const UserSchema = new Schema({

    identificacion: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        enum: ["Estudiante", "Lider", "Administrado"],
        default:'Estudiante'
    },
    estado: {
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