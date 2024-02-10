"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
    type User {
        _id: ID!
        name: String!
        phone: String!
        email: String!
        image: String!
        password: String!
        favorites: [Estate]
        role(roles: Roles): String!
        verified: Boolean!
        createdAt: String!
        refreshToken: String
    }

    type Query {
        user(_id: ID!): User
        users(limit: Int, offset: Int): [User]
        favorites(_id: ID!, limit: Int, offset: Int): [Estate]
        reauthenticate: Boolean
    }

    type Mutation {
        register(name: String!, password: String!, phone: String!, email: String!): User
        login(email: String!, password: String!): String
        logout(_id: ID!): Boolean
        updateUser(_id: ID!, phone: String, email: String, verified: Boolean, refreshToken: String, image: String): User
        addFavorite(_id: ID!, estateId: ID!): User
        removeFavorite(_id: ID!, estateId: ID!): User
        changeRole(_id: ID!, role: String!): User
    }

    enum Roles {
        user, admin, banned
    }
`;
//# sourceMappingURL=user.js.map