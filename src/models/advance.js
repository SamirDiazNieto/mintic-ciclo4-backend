const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('./project');
const Student = require('./user');

const advanceSchema = new Schema({
	project: {
		type: Schema.Types.ObjectId,
		ref: Project,
	},
	student: {
		type: Schema.Types.ObjectId,
		ref: Student,
	},
	date: {
		type: Schema.Types.Date,
		default: Date.now,
	},
	description: String,
	comment: [{ Type: String }],
});

module.exports = mongoose.model('Advance', advanceSchema);
