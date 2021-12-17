const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')


const ProjectSchema = new  Schema({
    name:{
        type: String
    },
    generalObjective:{
        type: String
    },
    especificObjectives:[{
        type: String
    }],
    budget:{
        type: Number
    },
    dateStart: {
        type: Date,
        default: null
    },
    dateEnd: {
        type: Date,
        default: null
    },
    phase: {
        type: String,
        enum: [null,"Iniciado", "En desarrollo", "Terminado"],
        default: null
    },
    state:{
        type: Boolean,  
        default: false      
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Project", ProjectSchema)