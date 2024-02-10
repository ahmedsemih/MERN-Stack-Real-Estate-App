"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type Province {
        _id: ID!
        code: Int!
        name: String!
    }

    type Query {
        province(_id: ID!): Province
        provinceByCode(code: Int!): Province
        provinces: [Province]
    }

    type Mutation {
        createProvince(code: Int!, name: String!): Province
        updateProvince(_id: ID!, code: Int, name: String): Province
        deleteProvince(_id: ID!): Province
    }
`;
//# sourceMappingURL=province.js.map