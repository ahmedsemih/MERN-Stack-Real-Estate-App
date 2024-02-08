import { gql } from "@apollo/client";

export const CREATE_DISTRICT = gql`
  mutation createDistrict($name: String!, $province: ID!) {
    createDistrict(name: $name, province: $province) {
      _id
      name
    }
  }
`;
export const UPDATE_DISTRICT = gql`
  mutation updateDistrict($_id: ID!, $name: String, $province: ID) {
    updateDistrict(_id: $_id, name: $name, province: $province) {
      _id
      name
      province {
        _id
      }
    }
  }
`;
export const DELETE_DISTRICT = gql`
  mutation deleteDistrict($_id: ID!) {
    deleteDistrict(_id: $_id) {
      _id
      name
      province {
        _id
      }
    }
  }
`;
