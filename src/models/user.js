const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastName: {
        type: String
    },
    email:{
        type: String,
        required: true
    },
    identifcation:{
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
})

module.exports = mongoose.model("User",UserSchema)