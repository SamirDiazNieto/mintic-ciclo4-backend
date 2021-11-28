const { projectResolvers } = require('./project');
const { userResolvers } = require('./user');
const { inscriptionResolvers } = require('./inscription');
const { advanceResolvers } = require('./advance');
const resolvers = [projectResolvers, userResolvers, inscriptionResolvers, advanceResolvers];

module.exports = { resolvers };
