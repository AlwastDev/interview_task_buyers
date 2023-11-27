'use client';
import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import s from './UserNameCell.module.scss';

interface UserNameCellProps {
  userName: string;
  email: string;
  avatar: StaticImageData;
}

export const UserNameCell: FC<UserNameCellProps> = ({
  userName,
  email,
  avatar,
}) => {
  return (
    <div className={s.userNameCell}>
      <Image
        src={avatar.src}
        width={48}
        height={48}
        alt={`avatar ${userName}`}
      />
      <div className={s.userInfo}>
        <span>{userName}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};
