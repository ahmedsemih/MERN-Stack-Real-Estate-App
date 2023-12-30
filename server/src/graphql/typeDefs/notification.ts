export default `#graphql
    type Notification {
        _id: ID!
        message: String!
        user: User!
        estate: Estate!
        status: Boolean!
        createdAt: String!
    }

    type Query {
        notification(_id: ID!): Notification
        notifications: [Notification]
        notificationsByUser(userId: ID!): [Notification]
    }

    type Mutation {
        createNotification(message: String!, user: ID!, estate: ID!): Notification
        deleteNotification(_id: ID!): Notification
    }
`;
