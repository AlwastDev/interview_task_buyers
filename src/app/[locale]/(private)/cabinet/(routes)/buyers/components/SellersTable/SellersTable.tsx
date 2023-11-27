'use client';
import React, { useState } from 'react';
import { getColumnsSellers } from './getColumnsSellers';
import { Table } from 'components/common/Table';
import { BanBuyerModal } from 'components/modals/BanBuyerModal';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import { FilterType } from '../../types';

import s from './SellersTable.module.scss';

export const SellersTable = () => {
  const tableTranslate = useTranslations('ProfilePage.Buyers.Table');

  const { getValues } = useFormContext<FilterType>();

  const [bannedBuyerId, setBannedBuyerId] = useState<number>(0);

  return (
    <>
      <div className={s.sellersTableWrapper}>
        <Table
          data={getValues().sellers}
          columns={getColumnsSellers(setBannedBuyerId)}
          translateFn={tableTranslate}
        />
      </div>
      <BanBuyerModal
        closeModal={() => setBannedBuyerId(0)}
        bannedBuyerId={bannedBuyerId}
      />
    </>
  );
};
