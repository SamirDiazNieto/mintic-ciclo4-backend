const advanceService = require('../services/advance');

const advanceResolvers = {
	Query: {
		getAdvances: async (parent, args) => {
			let advance = await advanceService.getAdvances();
			return advance;
		},
		getAdvanceById: async (parent, args) => {
			let advance = await advanceService.getAdvanceById(args._id);
			return advance;
		},
	},
	Mutation: {
		createAdvance: async (parent, args) => {
			let advance = await advanceService.createAdvance(args);
			return advance;
		},
		updateAdvance: async (parent, args) => {
			let advance = await advanceService.updateAdvance(args._id, args);
			return advance;
		},
		updateComment: async (parent, args) => {
			let advance = await advanceService.updateComment(args._id, args.comments);
			return advance;
		},
		deleteAdvance: async (parent, args)=>{
            let advance=await advanceService.deleteAdvance(args._id)
            return advance
        }
	},
};

module.exports = { advanceResolvers };
