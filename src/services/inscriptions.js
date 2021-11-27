const Inscriptions = require('../models/inscription')

createInscriptions= async (inscriptions)=>{
    let inscriptions= new Inscriptions(inscriptions)
    inscriptions =await inscriptionsInstance.save()
    return inscriptions
}
module.exports= {
    createInscriptions
}