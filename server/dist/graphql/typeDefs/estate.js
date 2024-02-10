"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type Estate {
        _id: ID!
        images: [String]!
        title: String!
        description: String!
        price: Int!
        seller: User!
        size: Int!
        status: Boolean!
        createdAt: String!
        updatedAt: String!
        category: Categories!
        location: Location!
        type: Type!
        detailedType: DetailedType!
        details: Details
    }

    type Query {
        estate(_id: ID!): Estate
        estates(limit: Int, offset: Int): [Estate]
        estatesBySeller(sellerId: ID!, limit: Int, offset: Int): [Estate]
        estatesByFilter(
            minPrice: Int
            maxPrice: Int
            minSize: Int
            maxSize: Int
            category: String
            type: ID
            detailedType: ID
            province: ID
            district: ID
            limit: Int
            offset: Int
            sortBy: String!
            order: String!
        ): [Estate]
        estatesSortedByDate(desc: Boolean!, limit: Int, offset: Int): [Estate]
        estatesSortedByPrice(desc: Boolean!, limit: Int, offset: Int): [Estate]
        estatesBySearch(search: String!, sortBy: String!, order: String!, limit: Int, offset: Int): [Estate]
    }

    type Mutation {
        createEstate(
            images: [String]!
            title: String!
            description: String!
            price: Int!
            seller: ID!
            size: Int!
            category: String!
            location: ID!
            type: ID!
            detailedType: ID!
            details: ID
        ): Estate
        updateEstate(
            _id: ID!,
            images: [String]
            title: String
            description: String
            price: Int
            status: Boolean
            size: Int
            category: String
            type: ID
            detailedType: ID
        ): Estate
    }

    enum Categories {
        rent, sale
    }
`;
//# sourceMappingURL=estate.js.map