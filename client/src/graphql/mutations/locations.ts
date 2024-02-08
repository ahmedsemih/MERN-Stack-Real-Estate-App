import { gql } from "@apollo/client";

export const CREATE_LOCATION = gql`
  mutation createLocation($province: ID!, $district: ID!, $address: String!) {
    createLocation(
      province: $province
      district: $district
      address: $address
    ) {
      _id
    }
  }
`;
export const UPDATE_LOCATION = gql`
  mutation updateLocation(
    $_id: ID!
    $province: ID
    $district: ID
    $address: String
  ) {
    updateLocation(
      _id: $_id
      province: $province
      district: $district
      address: $address
    ) {
      _id
      province {
        _id
        code
        name
      }
      district {
        _id
        name
      }
      address
    }
  }
`;
