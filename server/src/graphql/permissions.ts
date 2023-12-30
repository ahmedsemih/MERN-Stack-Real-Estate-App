import { and, rule, shield } from "graphql-shield";
import UserService from "../services/user";

const isAuthenticated = rule()(async (_, args, context) => {
  if (context.user) return true;
  return false;
});

const isAdmin = rule()(async (_, args, context) => {
  if (context.user.role !== "admin") return false;

  const user = await UserService.getUserById(context.user._id);
  return user.role === "admin";
});

const permissions = shield({
  Query: {
    users: and(isAuthenticated, isAdmin),
    notifications: and(isAuthenticated, isAdmin),
  },
  Mutation: {
    updateUser: and(isAuthenticated, isAdmin),
    addFavorite: isAuthenticated,
    removeFavorite: isAuthenticated,
    createType: and(isAuthenticated, isAdmin),
    updateType: and(isAuthenticated, isAdmin),
    deleteType: and(isAuthenticated, isAdmin),
    createProvince: and(isAuthenticated, isAdmin),
    updateProvince: and(isAuthenticated, isAdmin),
    deleteProvince: and(isAuthenticated, isAdmin),
    createNotification: isAuthenticated,
    deleteNotification: isAuthenticated,
    createLocation: isAuthenticated,
    updateLocation: isAuthenticated,
    createDistrict: and(isAuthenticated, isAdmin),
    updateDistrict: and(isAuthenticated, isAdmin),
    deleteDistrict: and(isAuthenticated, isAdmin),
    createHousingType: and(isAuthenticated, isAdmin),
    updateHousingType: and(isAuthenticated, isAdmin),
    deleteHousingType: and(isAuthenticated, isAdmin),
    createEstate: isAuthenticated,
    updateEstate: isAuthenticated,
    createDetails: isAuthenticated,
    updateDetails: isAuthenticated,
  },
});

export default permissions;
