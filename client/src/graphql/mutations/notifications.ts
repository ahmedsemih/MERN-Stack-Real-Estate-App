import { gql } from "@apollo/client";

export const CREATE_NOTIFICATION = gql`
  mutation createNotification($message: String!, $user: ID!, $estate: ID!) {
    createNotification(message: $message, user: $user, estate: $estate) {
      _id
      message
      status
      createdAt
    }
  }
`;
export const DELETE_NOTIFICATION = gql`
  mutation deleteNotification($_id: ID!) {
    deleteNotification(_id: $_id) {
      _id
      user {
        _id
      }
      estate {
        _id
      }
      message
      status
      createdAt
    }
  }
`;
