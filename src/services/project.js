const Project = require('../models/project')
const userService = require("./user")
const inscriptionService = require("./inscription")

createProject = async (project) => {
    let projectInstance = new Project(project)
    created_project = await projectInstance.save()
    await userService.UpdateProject(project['owner'], created_project['_id'])
    return created_project
}

getProjects = async () => {
    let projects = await Project.find({}).populate('owner')
    return projects
}

getProjectById = async (projectId) => {
    let project = await Project.findById(projectId).exec()
    return project
}

updateProject = async (projectId, project) => {
    let newProject = await Project.findByIdAndUpdate(projectId, project, { new: true })
    return newProject
}

deleteProject= async(projectId)=>{
    await Project.findByIdAndDelete(projectId,{
        function (err, docs) {
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


changePhaseProject = async (projectId, newPhase) => {
    let projectOriginal = await Project.findById(projectId).exec();
    actualState = projectOriginal["state"];
    actualDateEnd = projectOriginal["dateEnd"]

    //Después de que un proyecto haya alcanzado la fase “Terminado”, su estado cambiará  automáticamente a inactivo  y se captura la fecha final automáticamente
    if(newPhase =="Terminado"){
        actualState = false;
        actualDateEnd =  new Date();
        //la fecha de egreso en las inscripciones que están en estado “Aceptado” y que cuya fecha de egreso está vacía, se debe guardar la fecha en la que se hizo la inactivación del proyecto.
        inscriptionService.updateDateEndInscription(projectId)
    }
    let project = await Project.findByIdAndUpdate(projectId, {
        phase: newPhase,
        state : actualState,
        dateEnd : actualDateEnd
    }, { new: true })
    return project
}

//aprobar la creación de un proyecto, state = true
changeStateProject = async (projectId, newState) => {
    let projectOriginal = await Project.findById(projectId).exec();
    actualPhase = projectOriginal["phase"];
    actualDateStart = projectOriginal["dateStart"]
    //Cuando cambia el estado de “Inactivo” a “Activo” y el campo de la fase está vacío, la fase se actualiza a “Iniciado” y se captura la fecha inicial automáticamente
    if(newState && actualPhase == null){
        actualPhase = "Iniciado";   
        actualDateStart = new Date(); 
    }
    let project = await Project.findByIdAndUpdate(projectId, {
        phase: actualPhase,
        state : newState,
        dateStart : actualDateStart
    }, { new: true })
    return project
}
//Listar Proyectos por estudiante

//Listar proyectos por lider
getProjectByOwner = async (OwnerId) => {
    let project = await Project.find({
        owner : {
            _id :OwnerId
        }
    })
    return project
}

//Actualizar datos de un proyecto

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    changePhaseProject,
    changeStateProject,
    getProjectByOwner
}