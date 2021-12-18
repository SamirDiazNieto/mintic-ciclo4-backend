const Advance = require('../models/advance');
const Project = require('./project');

const createAdvance = async (newAdvance) => {
	let busqueda  = await Advance.findOne({"project":newAdvance.project })
	if (!busqueda){
		
		await Project.changePhaseProject(newAdvance.project, "En desarrollo")

	}
	let advanceInstance = new Advance(newAdvance);
	let advance = await advanceInstance.save();
	return advance;
};

const getAdvances = async () => {
	let advances = await Advance.find({}).populate('student').populate('project');
	return advances;
};

const getAdvanceById = async (advanceId) => {
	let advances = await Advance.findById(advanceId).populate('student').populate('project').exec();
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
deleteAdvance= async (advanceId, advance) => {
    await Advance.findByIdAndDelete(advanceId, {function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    }
}
    )
}
module.exports = {
	createAdvance,
	getAdvances,
	getAdvanceById,
	updateAdvance,
	updateComment,
	deleteAdvance
};
