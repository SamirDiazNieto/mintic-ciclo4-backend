const {projectResolvers} = require('./project')
const {userResolvers} = require('./user')
const {inscriptionResolvers}= require('./inscription')
const resolvers = [projectResolvers, userResolvers,inscriptionResolvers]

module.exports = {resolvers}