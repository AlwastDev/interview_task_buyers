'use client';
import React, { FC, useState } from 'react';
import { ToggleButtons } from 'components/common/ToggleButtons/ToggleButtons';
import { buyers } from '../../mockData';
import { BuyerCard } from '../BuyerCard/BuyerCard';
import { useTranslations } from 'next-intl';

import s from './TopBuyers.module.scss';

export const TopBuyers: FC = () => {
  const t = useTranslations('ProfilePage.Buyers.TopBuyers');

  const [activeButton, setActiveButton] = useState(1);

  const tabs = [t('allTime'), t('thisYear'), t('thisYear')];

  const onClickToggle = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className={s.topBuyers}>
        <h4 className={s.title}>{t('title')}</h4>
        <ToggleButtons
          tabs={tabs}
          activeButton={activeButton}
          onClick={onClickToggle}
        />
      </div>
      <div className={s.buyersList}>
        {buyers.map((buyer, index) => (
          <BuyerCard key={`${index}_buyerCard`} {...buyer} />
        ))}
      </div>
    </>
  );
};
