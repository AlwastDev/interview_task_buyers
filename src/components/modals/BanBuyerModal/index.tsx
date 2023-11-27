'use client';
import React, { FC } from 'react';
import { Modal } from 'ui/components/Modal';
import { RedButton, SecondaryButton } from 'ui/components/Button';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import { FilterType } from '../../../app/[locale]/(private)/cabinet/(routes)/buyers/types';

import s from './BanBuyerModal.module.scss';

interface BanBuyerModalProps {
  bannedBuyerId: number;
  closeModal: () => void;
}

export const BanBuyerModal: FC<BanBuyerModalProps> = ({
  bannedBuyerId,
  closeModal,
}) => {
  const t = useTranslations('ProfilePage.Buyers.Modal');

  const { getValues, setValue } = useFormContext<FilterType>();

  const sellers = getValues().sellers;

  const handleBanBuyer = () => {
    const changedSellers = sellers.map((seller) =>
      seller.id === bannedBuyerId ? { ...seller, isBanned: true } : seller
    );

    setValue('sellers', changedSellers);

    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={bannedBuyerId !== 0}
        onCloseModal={closeModal}
        className={s.modal}
      >
        <Modal.Header>
          <h4>{t('title')}</h4>
        </Modal.Header>
        <Modal.Content>
          <p>{t('text')}</p>
        </Modal.Content>
        <Modal.Footer>
          <div className={s.modal_btns}>
            <SecondaryButton onClick={closeModal}>
              {t('cancel')}
            </SecondaryButton>
            <RedButton onClick={handleBanBuyer}>{t('delete')}</RedButton>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
