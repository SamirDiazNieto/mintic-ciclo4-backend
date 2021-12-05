const { gql } = require("apollo-server-express")

const userType = gql`
    type User{
        _id: ID!
        identification: String!
        email: String!
        password: String!
        typeUser: String
        state: String
        projects:[Project]
    }
    type Project{
        _id: ID!
        name: String
        description: String
        topic: String
        owner: ID
    }

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
    }
    type Mutation {
        createUser(
            identification: String!
            email: String!
            password: String!
            state: String
            typeUser: String
        ): User
        updateUser(
            _id: ID!
            identification: String
            email: String
            password: String
            state: String
            typeUser: String
        ): User
        deleteUser(_id:ID!):User
    }
`;

module.exports = {userType}