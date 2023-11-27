import { StaticImageData } from 'next/image';

export interface Buyer {
  order: number;
  avatar: StaticImageData;
  fullName: string;
  amountPurchases: number;
}

export interface Seller {
  id: number;
  userName: string;
  email: string;
  signUpDate: string;
  purchases: number;
  salesAmount: string;
  isBanned: boolean;
  avatar: StaticImageData;
}

export type FilterType = {
  search: string;
  from: string;
  to: string;
  sellers: Seller[];
};
