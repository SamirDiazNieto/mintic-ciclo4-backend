const { projectType } = require('./project')
const { userType } = require('./user')
const {inscriptionType}=require("./inscription")
const types = [projectType, userType, inscriptionType]

module.exports = {
    types
}