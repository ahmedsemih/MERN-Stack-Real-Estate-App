import { gql } from "@apollo/client";

export const GET_DETAILED_TYPE = gql`
  query detailedType($_id: ID!) {
    detailedType(_id: $_id) {
      _id
      name
      parent {
        _id
        name
      }
    }
  }
`;

export const GET_DETAILED_TYPES = gql`
  query detailedTypes {
    detailedTypes {
      _id
      name
      parent {
        _id
        name
      }
    }
  }
`;

export const GET_DETAILED_TYPES_BY_PARENT = gql`
  query detailedTypesByParent($parentId: ID!) {
    detailedTypesByParent(parentId: $parentId) {
      _id
      name
    }
  }
`;
