const { gql } = require("apollo-server-express")

const inscriptionType = gql`

    type Inscription{
        _id: ID!
        project: Project
        student: User
        state: String
        dateRegister: String
        dateOut: String
    }
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
        getInscription:[Inscription]
        getInscriptionById(_id:String):Inscription
        
    }
    type Mutation{
        createInscription(  
            student: ID!
            project: ID!     
            state: String
            dateRegister: String
            dateOut: String
        ): Inscription
        updateInscription(
            _id: ID!
            state: String
            dateRegister: String
            dateOut: String
        ):Project
    }
    


`;
module.exports = { inscriptionType }