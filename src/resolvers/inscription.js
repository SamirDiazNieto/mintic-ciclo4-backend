const inscriptionService=require('../services/inscription')

const inscriptionResolvers={
    Query: {
        getInscription: async (parent, args) => {
            let inscription = await inscriptionService.getInscription()
            return inscription
        },
        getInscriptionById:async (parent, args) => {
            let inscription = await inscriptionService.getInscriptionById(args._id)
            return inscription
        }
    },
    Mutation: {
        createInscription: async (parent, args) => {
            let inscription = await inscriptionService.createInscription(args)
            return inscription
        },
        updateInscription:async (parent, args) => {
            let inscription = await inscriptionService.updateInscription(args._id, args)
            return inscription
        }
    }


}

module.exports = { inscriptionResolvers }