export default `#graphql
    type HousingType {
        _id: ID!
        name: String!
    }

    type Query {
        housingType(_id: ID!): HousingType
        housingTypes: [HousingType]
    }

    type Mutation {
        createHousingType(name: String!): HousingType
        updateHousingType(_id: ID!, name: String!): HousingType
        deleteHousingType(_id: ID!): HousingType
    }
`;
