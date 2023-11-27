'use client';
import React, { FC } from 'react';
import { Section } from 'components/common/profile/Section';
import { useTranslations } from 'next-intl';
import { FilterType } from './types';
import { FormProvider, useForm } from 'react-hook-form';
import { Filters } from './components/Filters/Filters';
import { TopBuyers } from './components/TopBuyers/TopBuyers';
import { SellersTable } from './components/SellersTable/SellersTable';
import { sellers } from './mockData';

export const Buyers: FC = () => {
  const t = useTranslations('ProfilePage.Buyers');

  const methods = useForm<FilterType>({
    defaultValues: {
      sellers: sellers,
      to: '',
      from: '',
      search: '',
    },
  });

  const onSubmit = () => {
    const { getValues, setValue } = methods;

    const to = getValues().to;
    const from = getValues().from;
    const search = getValues().search;

    const changedSellers = sellers.filter(
      (seller) =>
        seller.signUpDate >= from &&
        seller.signUpDate <= to &&
        (seller.userName.includes(search) || seller.email.includes(search))
    );

    setValue('sellers', changedSellers);
  };

  return (
    <FormProvider {...methods}>
      <Section>
        <Section.Header>
          <h3>{t('title')}</h3>
        </Section.Header>
        <Section.Body>
          <TopBuyers />
          <Filters onSubmit={onSubmit} />
          <SellersTable />
        </Section.Body>
      </Section>
    </FormProvider>
  );
};
