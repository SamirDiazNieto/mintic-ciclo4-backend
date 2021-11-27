const Project = require('../models/project')
const userService = require("./user")

createProject = async (project) => {
    let projectInstance = new Project(project)
    created_project = await projectInstance.save()
    await userService.UpdateProject(project['owner'], created_project['_id'])
    return created_project
}

getProjects = async () => {
    let projects = await Project.find({})
    return projects
}

getProjectById = async (projectId) => {
    let project = await Project.findById(projectId).exec()
    return project
}

updateProject = async (projectId, project) => {
    newProject = await Project.findByIdAndUpdate(projectId, project, { new: true })
    return newProject
}

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject
}