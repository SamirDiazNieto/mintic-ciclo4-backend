const { gql } = require("apollo-server-express")

const projectType = gql`
    type User{
        _id: ID!
        identificacion: String!
        email: String!
        password: String!
        tipoUsuario: String
        estado: String
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        description: String
        topic: String
        owner: ID
    }
    type Query{
        getProjects:[Project]
        getProjectById(_id:String):Project
    }

    type Mutation{
        createProject(
            name: String
            description: String
            topic: String
            owner: ID
        ): Project
        updateProject(
            _id: ID!
            name: String
            description: String
            topic: String
        ):Project
        deleteProject(_id:ID!):Project
    }

`;
module.exports = { projectType }