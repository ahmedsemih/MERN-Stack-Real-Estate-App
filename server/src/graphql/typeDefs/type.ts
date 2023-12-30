export default `#graphql
    type Type {
        _id: ID!
        name: String!
    }

    type Query {
        type(_id: ID!): Type
        types: [Type]
    }

    type Mutation {
        createType(name: String!): Type
        updateType(_id: ID!, name: String!): Type
        deleteType(_id: ID!): Type
    }
`;
