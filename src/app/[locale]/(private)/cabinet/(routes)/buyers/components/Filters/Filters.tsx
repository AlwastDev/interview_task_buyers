import React, { FC } from 'react';
import { FieldBox } from 'components/common/FieldBox';
import { DropdownField } from 'components/common/DropdownField';
import { SearchIcon } from 'components/icons/SearchIcon';
import { useFormContext } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { FilterType } from '../../types';

import s from './Filters.module.scss';

interface FiltersProps {
  onSubmit: () => void;
}

export const Filters: FC<FiltersProps> = ({ onSubmit }) => {
  const t = useTranslations('ProfilePage.Buyers.Filters');

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useFormContext<FilterType>();

  const sellers = getValues().sellers;

  return (
    <form className={s.filters} onSubmit={handleSubmit(onSubmit)}>
      <FieldBox
        className={s.filters__input}
        register={register}
        errors={errors}
        name={'search'}
        placeholder={t('searchSeller')}
        label={t('search')}
      />
      <DropdownField
        register={register}
        name={'from'}
        label={t('signUpDate')}
        placeholder={t('from')}
        errors={errors}
      >
        {sellers.map((seller, index) => (
          <div key={`dateFrom_${index}`}>{seller.signUpDate}</div>
        ))}
      </DropdownField>
      <DropdownField
        register={register}
        name={'to'}
        label={t('signUpDate')}
        placeholder={t('to')}
        errors={errors}
      >
        {sellers.map((seller, index) => (
          <div key={`dateTo_${index}`}>{seller.signUpDate}</div>
        ))}
      </DropdownField>
      <button className={s.filters__button} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};
