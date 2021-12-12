const { gql } = require("apollo-server-express")

const userType = gql`
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
        description: String
        topic: String
        owner: ID
    }

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
        getUserByEmail(email:String): User
    }
    type Mutation {
        createUser(
            identification: String!
            nameUser: String!
            email: String!
            state: String
            typeUser: String!
        ): User
        updateUser(
            _id: ID!
            identification: String
            nameUser: String
            email: String
            state: String
            typeUser: String
        ): User
        deleteUser(_id:ID!):User
    }
`;

module.exports = {userType}