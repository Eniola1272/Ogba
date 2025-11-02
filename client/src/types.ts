import type { facilityIcons } from "./assets/assets";

export interface IUserDummyData {
  _id: string;
  username: string;
  email: string;
  image: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  recentSearchedCities: string[];
}

export interface IHotelDummyData {
  _id: string;
  name: string;
  address: string;
  contact: string;
  owner: IUserDummyData;
  city: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IRoomData {
  _id: string;
  hotel: IHotelDummyData;
  roomType: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IHotelCardProps {
  room: IRoomData;
  index: number;
}

export type FacilityKey = keyof typeof facilityIcons;
