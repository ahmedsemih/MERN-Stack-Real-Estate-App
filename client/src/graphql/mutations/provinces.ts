import { gql } from "@apollo/client";

export const CREATE_PROVINCE = gql`
  mutation createProvince($code: Int!, $name: String!) {
    createProvince(code: $code, name: $name) {
      _id
      name
      code
    }
  }
`;
export const UDPATE_PROVINCE = gql`
  mutation updateProvince($_id: ID!, $code: Int, $name: String) {
    updateProvince(_id: $_id, code: $code, name: $name) {
      _id
      name
      code
    }
  }
`;
export const DELETE_PROVINCE = gql`
  mutation deleteProvince($_id: ID!) {
    deleteProvince(_id: $_id) {
      _id
      name
      code
    }
  }
`;
