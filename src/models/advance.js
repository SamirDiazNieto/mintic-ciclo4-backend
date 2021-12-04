const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('./project');
const User = require('./user');

const advanceSchema = new Schema({
	project: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
	},
	student: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	date: {
		type: Date,
	},
	// date: {
	// 	type: Date,
	// 	default: Date.now,
	// },
	description: String,
	comments: {
		type: [String],
	},
});

module.exports = mongoose.model('Advance', advanceSchema);
