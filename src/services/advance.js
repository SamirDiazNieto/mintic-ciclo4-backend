const Advance = require('../models/advance');

const createAdvance = async (newAdvance) => {
	let advanceInstance = new Advance(newAdvance);
	let advance = await advanceInstance.save();
	return advance;
};

const getAdvances = async () => {
	let advances = await Advance.find({}).populate('student').populate('project');
	return advances;
};

const getAdvanceById = async (advanceId) => {
	let advances = await Advance.findById(advanceId).exec();
	return advances;
};

const updateAdvance = async (advanceId, newAdvance) => {
	let updateAdvance = await Advance.findByIdAndUpdate(advanceId, newAdvance, { new: true });
	return updateAdvance;
};
const updateComment = async(advanceId, comment)=>{
	console.log(comment)
    let advances = await Advance.findByIdAndUpdate(advanceId,{
        $push:{
            comments:comment
        }
    },{ new: true })
    return advances
}
module.exports = {
	createAdvance,
	getAdvances,
	getAdvanceById,
	updateAdvance,
	updateComment
};
