import { gql } from "@apollo/client";

export const GET_NOTIFICATION = gql`
  query notification($_id: ID!) {
    notification(_id: $_id) {
      _id
      message
      user {
        _id
        name
        phone
        email
      }
      estate {
        _id
        title
        updatedAt
      }
      status
      createdAt
    }
  }
`;
export const GET_NOTIFICATIONS = gql`
  query notifications {
    notifications {
      _id
      message
      user {
        _id
        name
        phone
        email
      }
      estate {
        _id
        title
        updatedAt
      }
      status
      createdAt
    }
  }
`;
export const GET_NOTIFICATIONS_BY_USER = gql`
  query notificationsByUser($userId: ID!) {
    notificationsByUser(userId: $userId) {
      _id
      message
      user {
        _id
        name
        phone
        email
      }
      estate {
        _id
        title
        updatedAt
      }
      status
      createdAt
    }
  }
`;
