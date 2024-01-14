import { gql } from "@apollo/client";

export const GET_DISTRICT = gql`
  query district($_id: ID!) {
    district(_id: $_id) {
      _id
      name
      province {
        _id
        name
        code
      }
    }
  }
`;
export const GET_DISTRICT_BY_PROVINCE = gql`
  query districtsByProvince($provinceId: ID!) {
    districtsByProvince(provinceId: $provinceId) {
      _id
      name
      province {
        _id
        name
        code
      }
    }
  }
`;
export const GET_DISTRICTS = gql`
  query districts {
    districts {
      _id
      name
      province {
        _id
        name
        code
      }
    }
  }
`;
