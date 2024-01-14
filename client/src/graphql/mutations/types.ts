import { gql } from "@apollo/client";

export const CREATE_TYPE = gql`
  mutation createType($name: String!) {
    createType(name: $name) {
      _id
      name
    }
  }
`;
export const UPDATE_TYPE = gql`
  mutation updateType($_id: ID!, $name: String!) {
    updateType(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;
export const DELETE_TYPE = gql`
  mutation deleteType($_id: ID!) {
    deleteType(_id: $_id) {
      _id
      name
    }
  }
`;
