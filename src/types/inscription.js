const { gql } = require("apollo-server-express")

const inscriptionType = gql`
scalar Date

    type Inscription{
        _id: ID!
        project: Project
        student: User
        state: String
        dateRegister: Date
        dateOut: Date
        #comment:[String]
        
    }
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
        owner: User
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
            dateRegister: Date
            dateOut: Date
            #comment:[String]
        ): String
        updateInscription(
            _id: ID!
            state: String
            dateRegister: Date
            dateOut: Date
            #comment:[String]
            
            
        ):Inscription
        #UpdateComment(
        #    _id: ID!
            #comment:[String]
        #):Inscription
        deleteInscription(_id:ID!):Inscription
        #deleteAllInscription:Inscription

    }
    


`;

module.exports = { inscriptionType }