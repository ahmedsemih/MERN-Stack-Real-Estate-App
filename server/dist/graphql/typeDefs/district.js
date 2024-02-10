"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type District {
        _id: ID!
        name: String!
        province: Province!
    }

    type Query {
        district(_id: ID): District
        districts: [District]
        districtsByProvince(provinceId: ID!): [District]
    }

    type Mutation {
        createDistrict(name: String!, province: ID!): District
        updateDistrict(_id: ID!, name: String, province: ID): District
        deleteDistrict(_id: ID!): District
    }
`;
//# sourceMappingURL=district.js.map