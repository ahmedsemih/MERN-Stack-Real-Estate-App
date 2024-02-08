import { gql } from "@apollo/client";

export const CREATE_DETAILS = gql`
  mutation createDetails(
    $buildingYear: Int!
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
      buildingYear: $buildingYear
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
export const UPDATE_DETAILS = gql`
  mutation updateDetails(
    $_id: ID!
    $buildingYear: Int
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
      buildingYear: $buildingYear
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
