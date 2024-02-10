"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type Details {
        _id: ID!
        buildingYear: Int
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
        createDetails(
            buildingYear: Int
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
        ): Details
        updateDetails(
            _id: ID!
            buildingYear: Int
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
        ): Details
    }
`;
//# sourceMappingURL=details.js.map