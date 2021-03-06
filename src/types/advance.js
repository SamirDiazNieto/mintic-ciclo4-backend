const { gql } = require('apollo-server-express');

const advanceType = gql`
scalar Date
	type Advance {
		_id: ID!
		project: Project
		student: User
		date: Date
		description: String
		comments: [String]
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

	type Query {
		getAdvances: [Advance]
		getAdvanceById(_id: String): Advance
	}
	type Mutation {
		createAdvance(project: ID!,
		student: ID!, 
		date: Date, 
		description: String, 
		comments: String): Advance
		updateAdvance(_id: ID!, 
		description: String, 
		comments: String): Advance

		updateComment(
            _id: ID!,
            comments:[String]
        ):Advance
		deleteAdvance(_id: ID!): Advance
	}
`;
module.exports = { advanceType };
