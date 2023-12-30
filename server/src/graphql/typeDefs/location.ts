export default `#graphql
    type Location {
        _id: ID!
        province: Province!
        district: District!
        address: String!
    }

    type Query {
        location(_id: ID!): Location
        locations: [Location]
    }

    type Mutation {
        createLocation(province: ID!, district: ID!, address: String!): Location
        updateLocation(_id: ID!, province: ID, district: ID, address: String): Location
    }
`;
