'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { userShema } from 'utils/schemes/user-shema';

import { Button } from 'ui/components/Button';
import { FieldBox } from 'components/common/FieldBox';

import s from './Security.module.scss';

interface IChangePassword {
  current_password: string;
  new_password: string;
  repeat_new_password: string;
}

export const ChangePasswordForm: FC = () => {
  const t = useTranslations('ProfilePage.Security');
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<IChangePassword>({
    resolver: yupResolver(userShema.changePassword),
  });

  const handleChangePassword = ({
    current_password,
    new_password,
  }: IChangePassword) => {};

  const fields = [
    {
      name: 'current_password',
      label: t('current_password_label'),
      placeholder: t('current_password_placeholder'),
    },
    {
      name: 'new_password',
      label: t('new_password_label'),
      placeholder: t('new_password_placeholder'),
    },
    {
      name: 'repeat_new_password',
      label: t('repeat_new_password_label'),
      placeholder: t('repeat_new_password_placeholder'),
    },
  ];

  return (
    <form className={s.form} onSubmit={handleSubmit(handleChangePassword)}>
      <div className={s.form_fields}>
        {fields.map((field, index) => (
          <FieldBox
            register={register}
            errors={errors}
            name={field.name}
            label={field.label}
            type="password"
            placeholder={field.placeholder}
            className={s.form_field}
            key={index}
          />
        ))}
      </div>
      <div className={s.form_footer}>
        <Button className={s.form_submit} type="submit">
          {t('change_btn')}
        </Button>
      </div>
    </form>
  );
};
