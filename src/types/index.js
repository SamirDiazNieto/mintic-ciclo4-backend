const { projectType } = require('./project');
const { userType } = require('./user');
const { inscriptionType } = require('./inscription');
const { advanceType } = require('./advance');
const types = [projectType, userType, inscriptionType, advanceType];

module.exports = {
	types,
};
