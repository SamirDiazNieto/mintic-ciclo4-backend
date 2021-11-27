const { gql } = require("apollo-server-express")

const projectType = gql`
    type User{
        _id: ID!
        name: String
        lastName: String
        phone: String
        email: String!
        password: String!
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
    }

`;
module.exports = { projectType }