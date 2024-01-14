import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $email: String
    $phone: String
    $verified: Boolean
  ) {
    updateUser(_id: $_id, email: $email, phone: $phone, verified: $verified) {
      _id
      name
      email
      phone
      role
      verified
      createdAt
    }
  }
`;
export const ADD_FAVORITE = gql`
  mutation addFavorite($_id: ID!, $estateId: ID!) {
    addFavorite(_id: $_id, estateId: $estateId) {
      _id
      favorites {
        _id
      }
    }
  }
`;
export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($_id: ID!, $estateId: ID!) {
    removeFavorite(_id: $_id, estateId: $estateId) {
      _id
      favorites {
        _id
      }
    }
  }
`;
