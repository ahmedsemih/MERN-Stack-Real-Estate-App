import { gql } from "@apollo/client";

export const createDetailedType = gql`
  mutation createDetailedType($name: String!, $parent: ID!) {
    createDetailedType(name: $name, parent: $parent) {
      _id
      name
    }
  }
`;

export const updateDetailedType = gql`
  mutation updateDetailedType($_id: ID!, $name: String!) {
    updateDetailedType(_id: $_id, name: $name) {
      _id
      name
      parent {
        _id
        name
      }
    }
  }
`;

export const deleteDetailedType = gql`
  mutation deleteDetailedType($_id: ID!) {
    deleteDetailedType(_id: $_id) {
      _id
      name
      parent {
        _id
        name
      }
    }
  }
`;
