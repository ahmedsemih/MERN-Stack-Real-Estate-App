import { gql } from "@apollo/client";

export const CREATE_DETAILS = gql`
  mutation createDetails(
    $age: Int!
    $roomAndSaloon: String!
    $floor: Int!
    $locatedFloor: Int!
    $bathroom: Int!
    $internet: Boolean!
    $furnished: Boolean!
    $balcony: Boolean!
    $elevator: Boolean!
    $thermalInsulation: Boolean!
    $garage: Boolean!
    $fittedKitchen: Boolean!
    $fittedBathroom: Boolean!
    $parquet: Boolean!
    $heatingType: String!
  ) {
    createDetails(
      age: $age
      roomAndSaloon: $roomAndSaloon
      floor: $floor
      locatedFloor: $locatedFloor
      bathroom: $bathroom
      internet: $internet
      furnished: $furnished
      balcony: $balcony
      elevator: $elevator
      thermalInsulation: $thermalInsulation
      garage: $garage
      fittedKitchen: $fittedKitchen
      fittedBathroom: $fittedBathroom
      parquet: $parquet
      heatingType: $heatingType
    ) {
      _id
      age
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
export const UPDATE_DETAILS = gql`
  mutation updateDetails(
    $_id: ID!
    $age: Int
    $roomAndSaloon: String
    $floor: Int
    $locatedFloor: Int
    $bathroom: Int
    $internet: Boolean
    $furnished: Boolean
    $balcony: Boolean
    $elevator: Boolean
    $thermalInsulation: Boolean
    $garage: Boolean
    $fittedKitchen: Boolean
    $fittedBathroom: Boolean
    $parquet: Boolean
    $heatingType: String
  ) {
    updateDetails(
      _id: $_id
      age: $age
      roomAndSaloon: $roomAndSaloon
      floor: $floor
      locatedFloor: $locatedFloor
      bathroom: $bathroom
      internet: $internet
      furnished: $furnished
      balcony: $balcony
      elevator: $elevator
      thermalInsulation: $thermalInsulation
      garage: $garage
      fittedKitchen: $fittedKitchen
      fittedBathroom: $fittedBathroom
      parquet: $parquet
      heatingType: $heatingType
    ) {
      _id
      age
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
