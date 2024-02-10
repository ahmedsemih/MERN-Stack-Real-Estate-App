"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const graphql_middleware_1 = require("graphql-middleware");
const schema_1 = require("@graphql-tools/schema");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const permissions_1 = __importDefault(require("./permissions"));
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
const schemaWithPermissons = (0, graphql_middleware_1.applyMiddleware)(schema, permissions_1.default);
const server = new server_1.ApolloServer({ schema: schemaWithPermissons });
exports.default = server;
//# sourceMappingURL=index.js.map