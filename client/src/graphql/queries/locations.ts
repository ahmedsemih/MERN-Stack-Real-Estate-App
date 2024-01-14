import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      province {
        _id
        name
        code
      }
      district {
        _id
        name
      }
      address
    }
  }
`;
export const GET_LOCATIONS = gql`
  query locations {
    locations {
      _id
      province {
        _id
        name
        code
      }
      district {
        _id
        name
      }
      address
    }
  }
`;
