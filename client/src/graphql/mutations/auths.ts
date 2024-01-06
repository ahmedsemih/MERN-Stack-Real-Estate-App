import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register(
    $name: String!
    $password: String!
    $phone: String!
    $email: String!
  ) {
    register(name: $name, password: $password, phone: $phone, email: $email) {
      _id
      name
      email
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const LOGOUT = gql`
  mutation logout($_id: ID!) {
    logout(_id: $_id)
  }
`;
