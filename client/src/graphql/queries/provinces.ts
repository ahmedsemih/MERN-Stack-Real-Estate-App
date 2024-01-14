import { gql } from "@apollo/client";

export const GET_PROVINCE = gql`
  query province($_id: ID!) {
    province(_id: $_id) {
      _id
      code
      name
    }
  }
`;
export const GET_PROVINCE_BY_CODE = gql`
  query provinceByCode($code: Int!) {
    provinceByCode(code: $code) {
      _id
      code
      name
    }
  }
`;
export const GET_PROVINCES = gql`
  query provinces {
    provinces {
      _id
      code
      name
    }
  }
`;
