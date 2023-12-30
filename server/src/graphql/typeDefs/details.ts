export default `#graphql
    type Details {
        _id: ID!
        age: Int
        roomAndSaloon: String
        floor: Int
        locatedFloor: Int
        bathroom: Int
        internet: Boolean
        furnished: Boolean
        balcony: Boolean
        elevator: Boolean
        thermalInsulation: Boolean
        garage: Boolean
        fittedKitchen: Boolean
        fittedBathroom: Boolean
        parquet: Boolean
        heatingType: String
    }

    type Query {
        details(_id: ID!): Details
    }

    type Mutation {
        createDetails(body: Inputs): Details
        updateDetails(_id: ID!, body: Inputs): Details
    }

    input Inputs {
        age: Int
        roomAndSaloon: String
        floor: Int
        locatedFloor: Int
        bathroom: Int
        internet: Boolean
        furnished: Boolean
        balcony: Boolean
        elevator: Boolean
        thermalInsulation: Boolean
        garage: Boolean
        fittedKitchen: Boolean
        fittedBathroom: Boolean
        parquet: Boolean
        heatingType: String
    }
`;
