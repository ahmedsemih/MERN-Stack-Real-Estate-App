const typeDefs = `#graphql
    type Test {
        message: String
    }

    type Query {
        tests: [Test]
    }
`;

export default typeDefs;
