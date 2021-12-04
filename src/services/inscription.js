const Inscription = require('../models/inscription')

createInscription = async (inscription) => {
    let inscriptionInstance = new Inscription(inscription)
    console.log(inscription.project)
    let busqueda  = await Inscription.findOne({"project":inscription.project,"student":inscription.student })
    console.log("busqueda")
    console.log(busqueda)
    if (!busqueda){
        inscription = await inscriptionInstance.save()
        return "Inscripcion Exitosa"
    }
    else{
        if (busqueda.dateOut){
            inscription = await inscriptionInstance.save()
            return "inscription"
        }
        return "Inscripción ya existente"
    
    }
    
}


getInscription = async () => {
    let inscriptions = await Inscription.find({}).populate("student").populate("project")
    return inscriptions
}
getInscriptionById = async (inscriptionId) => {
    let inscription  = await Inscription.findById(projectId).exec()
    return inscription
}

updateInscription = async (inscriptionId, inscription) => {
    
    let newInscription = await Inscription.findByIdAndUpdate(inscriptionId, inscription, { new: true })
    return newInscription
}

module.exports= {
    getInscription,createInscription, updateInscription, getInscriptionById
}