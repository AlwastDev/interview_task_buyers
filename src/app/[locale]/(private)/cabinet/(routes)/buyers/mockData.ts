import { Buyer, Seller } from './types';

import avatarBuyerImg1 from 'assets/images/buyers/avatar1.png';
import avatarBuyerImg2 from 'assets/images/buyers/avatar2.png';
import avatarBuyerImg3 from 'assets/images/buyers/avatar3.png';
import avatarBuyerImg4 from 'assets/images/buyers/avatar4.png';
import avatarBuyerImg5 from 'assets/images/buyers/avatar5.png';

import avatarSellerImg1 from 'assets/images/sellers/avatar1.png';
import avatarSellerImg2 from 'assets/images/sellers/avatar2.png';
import avatarSellerImg3 from 'assets/images/sellers/avatar3.png';
import avatarSellerImg4 from 'assets/images/sellers/avatar4.png';
import avatarSellerImg5 from 'assets/images/sellers/avatar5.png';
import avatarSellerImg6 from 'assets/images/sellers/avatar6.png';
import avatarSellerImg7 from 'assets/images/sellers/avatar7.png';
import avatarSellerImg8 from 'assets/images/sellers/avatar8.png';
import avatarSellerImg9 from 'assets/images/sellers/avatar9.png';
import avatarSellerImg10 from 'assets/images/sellers/avatar10.png';

export const buyers: Buyer[] = [
  {
    order: 1,
    avatar: avatarBuyerImg1,
    fullName: 'Kristin Watson',
    amountPurchases: 2140,
  },
  {
    order: 2,
    avatar: avatarBuyerImg2,
    fullName: 'Theresa Webb',
    amountPurchases: 2140,
  },
  {
    order: 3,
    avatar: avatarBuyerImg3,
    fullName: 'Guy Hawkins',
    amountPurchases: 2140,
  },
  {
    order: 4,
    avatar: avatarBuyerImg4,
    fullName: 'Ralph Edwards',
    amountPurchases: 2140,
  },
  {
    order: 5,
    avatar: avatarBuyerImg5,
    fullName: 'Wade Warren',
    amountPurchases: 2140,
  },
];

export const sellers: Seller[] = [
  {
    id: 1,
    userName: 'Kathryn Murphy',
    email: 'smallpaul@me.com',
    signUpDate: '31/05/20, 14:20',
    purchases: 25,
    salesAmount: '4400.00',
    isBanned: false,
    avatar: avatarSellerImg1,
  },
  {
    id: 2,
    userName: 'Floyd Miles',
    email: 'mccurley@yahoo.ca',
    signUpDate: '05/06/20, 11:30',
    purchases: 36,
    salesAmount: '360.00',
    isBanned: true,
    avatar: avatarSellerImg2,
  },
  {
    id: 3,
    userName: 'Jacob Jones',
    email: 'pkplex@optonline.net',
    signUpDate: '02/06/20, 14:30',
    purchases: 10,
    salesAmount: '250.00',
    isBanned: false,
    avatar: avatarSellerImg3,
  },
  {
    id: 4,
    userName: 'Darlene Robertson',
    email: 'bradl@comcast.net',
    signUpDate: '02/06/20, 14:30',
    purchases: 47,
    salesAmount: '471.00',
    isBanned: false,
    avatar: avatarSellerImg4,
  },
  {
    id: 5,
    userName: 'Cody Fisher',
    email: 'elflord@mac.com',
    signUpDate: '31/05/20, 14:20',
    purchases: 36,
    salesAmount: '6900.00',
    isBanned: true,
    avatar: avatarSellerImg5,
  },
  {
    id: 6,
    userName: 'Jenny Wilson',
    email: 'jginspace@mac.com',
    signUpDate: '03/06/20, 15:00',
    purchases: 17,
    salesAmount: '360.00',
    isBanned: false,
    avatar: avatarSellerImg6,
  },
  {
    id: 7,
    userName: 'Cameron Williamson',
    email: 'crusader@yahoo.com',
    signUpDate: '02/06/20, 14:30',
    purchases: 360,
    salesAmount: '1850.00',
    isBanned: false,
    avatar: avatarSellerImg7,
  },
  {
    id: 8,
    userName: 'Esther Howard',
    email: 'mfburgo@live.com',
    signUpDate: '01/06/20, 09:30',
    purchases: 8,
    salesAmount: '74.00',
    isBanned: false,
    avatar: avatarSellerImg8,
  },
  {
    id: 9,
    userName: 'Ralph Edwards',
    email: 'plover@aol.com',
    signUpDate: '03/06/20, 15:00',
    purchases: 23,
    salesAmount: '50.00',
    isBanned: true,
    avatar: avatarSellerImg9,
  },
  {
    id: 10,
    userName: 'Eleanor Pena',
    email: 'amichalo@msn.com',
    signUpDate: '02/06/20, 14:30',
    purchases: 158,
    salesAmount: '5000.00',
    isBanned: false,
    avatar: avatarSellerImg10,
  },
  {
    id: 11,
    userName: 'Kathryn Murphy',
    email: 'smallpaul@me.com',
    signUpDate: '31/05/20, 14:20',
    purchases: 25,
    salesAmount: '4400.00',
    isBanned: false,
    avatar: avatarSellerImg1,
  },
];
