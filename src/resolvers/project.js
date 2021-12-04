const projectService = require("../services/project")

const projectResolvers = {
    Query: {
        getProjects: async (parent, args) => {
            let project = await projectService.getProjects()
            return project
        },
        getProjectById: async (parent, args) => {
            let project = await projectService.getProjectById(args._id)
            return project
        }, 
        getProjectByOwner: async (parent, args) => {
            let project = await projectService.getProjectByOwner(args.OwnerId)
            return project
        },
    },
    Mutation: {
        createProject: async (parent, args) => {
            let project = await projectService.createProject(args)
            return project
        },
        updateProject: async (parent, args) => {
            let project = await projectService.updateProject(args._id, args)
            return project
        },
        deleteProject: async (parent, args)=>{
            let project= await projectService.deleteProject(args._id)
            return project
        },        
        changePhaseProject:  async (parent, args)=>{
            let project= await projectService.changePhaseProject(args.projectId, args.newPhase)
            return project
        },       
        changeStateProject :  async (parent, args)=>{
            let project= await projectService.changeStateProject(args.projectId, args.newState)
            return project
        },       
    }
}

module.exports = { projectResolvers }