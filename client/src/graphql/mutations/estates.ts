import { gql } from "@apollo/client";

export const CREATE_ESTATE = gql`
  mutation createEstate(
    $images: [String]!
    $title: String!
    $description: String!
    $price: Int!
    $seller: ID!
    $size: Int!
    $category: String!
    $location: ID!
    $type: ID!
    $detailedType: ID!
    $details: ID
  ) {
    createEstate(
      images: $images
      title: $title
      description: $description
      price: $price
      seller: $seller
      size: $size
      category: $category
      location: $location
      type: $type
      detailedType: $detailedType
      details: $details
    ) {
      _id
      images
      title
      description
      price
      size
      status
      createdAt
      updatedAt
      category
    }
  }
`;
export const UPDATE_ESTATE = gql`
  mutation updateEstate(
    $_id: ID!
    $images: [String]
    $title: String
    $description: String
    $price: Int
    $status: Boolean
    $size: Int
    $category: String
    $type: ID
    $detailedType: ID
  ) {
    updateEstate(
      _id: $_id
      images: $images
      title: $title
      description: $description
      price: $price
      size: $size
      status: $status
      category: $category
      type: $type
      detailedType: $detailedType
    ) {
      _id
      images
      title
      description
      price
      seller {
        _id
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        _id
      }
      type {
        _id
      }
      detailedType {
        _id
      }
      details {
        _id
      }
    }
  }
`;
