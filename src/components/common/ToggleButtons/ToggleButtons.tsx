import React, { FC } from 'react';

import s from './ToggleButtons.module.scss';

interface ToggleButtonsProps {
  tabs: string[];
  activeButton: number;
  onClick: (buttonNumber: number) => void;
}

export const ToggleButtons: FC<ToggleButtonsProps> = ({
  tabs,
  activeButton,
  onClick,
}) => {
  return (
    <div className={s.toggleButtons}>
      {tabs.map((tab, index) => {
        return (
          <button
            key={`${index + 1}_toggleButton`}
            className={activeButton === index + 1 ? s.active : ''}
            onClick={() => onClick(index + 1)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
