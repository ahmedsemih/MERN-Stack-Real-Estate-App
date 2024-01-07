import { mergeResolvers } from "@graphql-tools/merge";

import users from "./user";
import types from "./type";
import estates from "./estate";
import details from "./details";
import locations from "./location";
import provinces from "./province";
import districts from "./district";
import detailedType from "./detailedType";
import notifications from "./notification";

const resolvers = mergeResolvers([
  provinces,
  districts,
  details,
  estates,
  detailedType,
  notifications,
  locations,
  types,
  users,
]);

export default resolvers;
