import { gql } from "@apollo/client";

export const GET_TYPE = gql`
  query type($_id: ID!) {
    type(_id: $_id) {
      _id
      name
    }
  }
`;

export const GET_TYPES = gql`
  query types {
    types {
      _id
      name
    }
  }
`;
