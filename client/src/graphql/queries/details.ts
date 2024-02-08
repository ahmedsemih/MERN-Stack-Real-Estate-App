import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
  query details($_id: ID!) {
    details {
      _id
      buildingYear
      roomAndSaloon
      floor
      locatedFloor
      bathroom
      internet
      furnished
      balcony
      elevator
      thermalInsulation
      garage
      fittedKitchen
      fittedBathroom
      parquet
      heatingType
    }
  }
`;
