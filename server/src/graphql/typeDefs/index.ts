import { mergeTypeDefs } from "@graphql-tools/merge";

import users from "./user";
import types from "./type";
import estates from "./estate";
import details from "./details";
import provinces from "./province";
import districts from "./district";
import locations from "./location";
import detailedType from "./detailedType";
import notifications from "./notification";

const typeDefs = mergeTypeDefs([
  provinces,
  districts,
  details,
  estates,
  detailedType,
  locations,
  notifications,
  types,
  users,
]);

export default typeDefs;
