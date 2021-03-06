const Inscription = require('../models/inscription');
const userService = require("./user")
const { updateProject } = require('./project');

createInscription = async (inscription) => {
    let inscriptionInstance = new Inscription(inscription)
    console.log(inscription.project)
    let busqueda  = await Inscription.findOne({"project":inscription.project,"student":inscription.student })
    console.log("busqueda")
    console.log(busqueda)
    if (!busqueda){
        inscription = await inscriptionInstance.save()
        userService.UpdateProject(inscription.student, inscription.project)
        return "Inscripcion Exitosa"
    }
    else{
        if (busqueda.dateOut){
            inscription = await inscriptionInstance.save()
            userService.UpdateProject(inscription.student, inscription.project)
            return "inscription"
        }
        return "Inscripción ya existente"
    
    }
    
}


getInscription = async () => {
	let inscriptions = await Inscription.find({}).populate('student').populate('project').populate('project.owner');
	return inscriptions;
};
getInscriptionById = async (inscriptionId) => {
	let inscription = await Inscription.findById(inscriptionId).populate('student').populate('project').exec();
	return inscription;
};

updateInscription = async (inscriptionId, inscription) => {
    if(inscription.state=="Aceptado"){
        inscription.dateRegister=new Date();
    }
    let newInscription = await Inscription.findByIdAndUpdate(inscriptionId, inscription, { new: true })
    return newInscription
}
deleteInscription= async (inscriptionId, inscription) => {

    await Inscription.findByIdAndDelete(inscriptionId, {function (err, docs) {
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

updateDateEndInscription = async(projectId)=>{
    await Inscription.updateMany({
        project: {
            _id: projectId
        }
            ,dateOut: null,
            state: "Aceptado"
        },
        { dateOut: new Date() }, 
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        })
}



module.exports = {
	getInscription,
	createInscription,
	updateInscription,
	getInscriptionById,
    updateDateEndInscription,
    deleteInscription
};


//hola