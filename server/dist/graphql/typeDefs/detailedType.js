"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type DetailedType {
        _id: ID!
        name: String!
        parent: Type!
    }

    type Query {
        detailedType(_id: ID!): DetailedType
        detailedTypes: [DetailedType]
        detailedTypesByParent(parentId: ID!): [DetailedType]
    }

    type Mutation {
        createDetailedType(name: String!, parent: ID!): DetailedType
        updateDetailedType(_id: ID!, name: String!): DetailedType
        deleteDetailedType(_id: ID!): DetailedType
    }
`;
//# sourceMappingURL=detailedType.js.map