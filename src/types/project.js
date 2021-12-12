const { gql } = require("apollo-server-express")

const projectType = gql`
    type User{
        _id: ID!
        identification: String!
        nameUser: String!
        email: String!
        typeUser: String!
        state: String
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        generalObjective: String
        especificObjectives: [String]
        budget: Int
        dateStart: Date
        dateEnd: Date
        phase: String
        state: Boolean
        owner: ID
    }
    type Query{
        getProjects:[Project]
        getProjectById(_id:String):Project
        getProjectByOwner(OwnerId:String):[Project]
    }

    type Mutation{
        createProject(
            name: String
            generalObjective: String
            especificObjectives: [String]
            budget: Int
            dateStart: Date
            dateEnd: Date
            phase: String
            state: Boolean
            owner: ID
        ): Project
        updateProject(
            _id: ID!
            name: String
            generalObjective: String
            especificObjectives: [String]
            budget: Int
            dateStart: Date
            dateEnd: Date
            phase: String
            state: Boolean
            owner: ID
        ):Project
        deleteProject(_id:ID!):Project
        changePhaseProject(
            projectId: ID
            newPhase: String 
        ):Project
        changeStateProject(
            projectId: ID
            newState: Boolean 
        ):Project

    }

`;
module.exports = { projectType }