'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { AchiveIcon, GoldenAchiveIcon } from 'components/icons/AchiveIcon';
import { Buyer } from '../../types';

import s from './BuyerCard.module.scss';

interface BuyerCardProps extends Buyer {}

export const BuyerCard: FC<BuyerCardProps> = ({
  fullName,
  amountPurchases,
  avatar,
  order,
}) => {
  return (
    <div className={s.card}>
      <div className={s.card__avatarContainer}>
        <Image
          width={80}
          height={80}
          className={s.avatar}
          src={avatar.src}
          alt="avatar"
        />
        <div
          className={`${s.card__avatarContainer__position} ${
            order === 1 ? s.firstPosition : s.defaultPosition
          }`}
        >
          #{order}
        </div>
      </div>
      <span className={s.card__fullName}>{fullName}</span>
      <div className={s.card__purchaseContainer}>
        {order === 1 ? <GoldenAchiveIcon /> : <AchiveIcon />}
        {amountPurchases.toLocaleString()} purchases
      </div>
    </div>
  );
};
