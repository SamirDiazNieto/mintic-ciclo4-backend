const Inscription = require('../models/inscription');

createInscription = async (inscription) => {
	let inscriptionInstance = new Inscription(inscription);
	inscription = await inscriptionInstance.save();
	return inscription;
};

getInscription = async () => {
	let inscriptions = await Inscription.find({}).populate('student').populate('project');
	return inscriptions;
};
getInscriptionById = async (inscriptionId) => {
	let inscription = await Inscription.findById(projectId).exec();
	return inscription;
};

updateInscription = async (inscriptionId, inscription) => {
	let newInscription = await Inscription.findByIdAndUpdate(inscriptionId, inscription, { new: true });
	return newInscription;
};

module.exports = {
	getInscription,
	createInscription,
	updateInscription,
	getInscriptionById,
};
