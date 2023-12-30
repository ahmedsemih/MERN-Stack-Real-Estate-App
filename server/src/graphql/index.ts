import { ApolloServer } from "@apollo/server";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import permissions from "./permissions";



const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithPermissons = applyMiddleware(schema, permissions);

const server = new ApolloServer({ schema: schemaWithPermissons });
export default server;

