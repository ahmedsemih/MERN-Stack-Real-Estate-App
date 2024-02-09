import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $email: String
    $phone: String
    $image: String
    $verified: Boolean
  ) {
    updateUser(
      _id: $_id
      email: $email
      phone: $phone
      image: $image
      verified: $verified
    ) {
      _id
      name
      email
      phone
      role
      image
      verified
      createdAt
    }
  }
`;
export const ADD_FAVORITE = gql`
  mutation addFavorite($_id: ID!, $estateId: ID!) {
    addFavorite(_id: $_id, estateId: $estateId) {
      _id
    }
  }
`;
export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($_id: ID!, $estateId: ID!) {
    removeFavorite(_id: $_id, estateId: $estateId) {
      _id
    }
  }
`;

export const CHANGE_ROLE = gql`
  mutation changeRole($_id: ID!, $role: String!) {
    changeRole(_id: $_id, role: $role) {
      _id
      name
      email
      phone
      role
      image
      verified
      createdAt
    }
  }
`;
