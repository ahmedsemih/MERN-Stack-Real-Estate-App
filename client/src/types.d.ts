export type User = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  favorites?: Estate;
  image: string;
  role: "admin" | "user" | "banned";
  verified: boolean;
  createdAt: string;
  refreshToken?: string;
};

export type Estate = {
  _id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  seller: User;
  size: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  category: "rent" | "sale";
  location: Location;
  type: Type;
  detailedType: DetailedType;
  details?: Details;
};

export type Type = {
  _id: string;
  name: string;
};

export type DetailedType = {
  _id: string;
  name: string;
  parent: Type;
};

export type Province = {
  _id: string;
  code: number;
  name: string;
};

export type District = {
  _id: string;
  name: string;
  province: Province;
};

export type Notification = {
  _id: string;
  message: string;
  user: User;
  estate: Estate;
  status: boolean;
  createdAt: string;
};

export type Location = {
  _id: string;
  province: Province;
  district: District;
  address: string;
};

export type Details = {
  _id: string;
  buildingYear: number;
  roomAndSaloon: string;
  floor: number;
  locatedFloor: number;
  bathroom: number;
  internet: boolean;
  furnished: boolean;
  balcony: boolean;
  elevator: boolean;
  thermalInsulation: boolean;
  garage: boolean;
  fittedKitchen: boolean;
  fittedBathroom: boolean;
  parquet: boolean;
  heatingType: string;
};
