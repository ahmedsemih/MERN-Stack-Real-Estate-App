import { BsFillHousesFill, BsHouseFill } from "react-icons/bs";
import { HiOfficeBuilding, HiHome, HiMap, HiKey } from "react-icons/hi";
import { MdNotifications, MdAccountBox, MdFavorite } from "react-icons/md";

export const USER_MENU_LINKS = [
  {
    icon: MdAccountBox,
    name: "account",
  },
  {
    icon: MdNotifications,
    name: "notifications",
  },
  {
    icon: BsFillHousesFill,
    name: "listings",
  },
  {
    icon: MdFavorite,
    name: "favorites",
  },
];

export const THEME_OPTIONS = ["system", "light", "dark"];

export const LISTING_STEPS = [
  "category",
  "location",
  "estate",
  "details",
  "submit",
];

export const HOUSING_TYPE_ID = "659a21caaa0a41b1452afefe";

export const ROOM_AND_SALOONS = [
  {
    name: "1 + 0",
    value: "1+0",
  },
  {
    name: "1 + 1",
    value: "1+1",
  },
  {
    name: "2 + 1",
    value: "2+1",
  },
  {
    name: "3 + 1",
    value: "3+1",
  },
  {
    name: "3 + 2",
    value: "3+2",
  },
  {
    name: "4 + 1",
    value: "4+1",
  },
  {
    name: "4 + 2",
    value: "4+2",
  },
  {
    name: "5 + 1",
    value: "5+1",
  },
  {
    name: "5 + 2",
    value: "5+2",
  },
  {
    name: "5 + 3",
    value: "5+3",
  },
];

export const HEATING_SYSTEMS = [
  {
    name: "Heat Pump",
    value: "heat pump",
  },
  {
    name: "Forced Air System",
    value: "forced air system",
  },
  {
    name: "Radiator System",
    value: "radiator system",
  },
  {
    name: "Radiant Heating",
    value: "radiant heating",
  },
];

export const HOME_LINKS = [
  {
    icon: BsHouseFill,
    name: "Sale",
    param: "?category=sale",
  },
  {
    icon: HiKey,
    name: "Rent",
    param: "?category=rent",
  },
  {
    icon: HiHome,
    name: "House",
    param: "?category=sale&type=659a21caaa0a41b1452afefe",
  },
  {
    icon: HiOfficeBuilding,
    name: "Workplace",
    param: "?category=sale&type=659a21c4aa0a41b1452afefb",
  },
  {
    icon: HiMap,
    name: "Land",
    param: "?category=sale&type=659a2209aa0a41b1452aff01",
  },
];

export const SORT_OPTIONS = [
  { name: "Newest", value: "date-desc" },
  { name: "Oldest", value: "date-asc" },
  { name: "Highest Price", value: "price-desc" },
  { name: "Lowest Price", value: "price-asc" },
];
