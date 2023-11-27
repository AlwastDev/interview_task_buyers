import React from 'react';
import { CellProps, Column } from 'react-table';
import { Seller } from '../../types';
import { Checkbox } from 'ui/components/Checkbox';
import { UserNameCell } from '../UserNameCell/UserNameCell';
import { ArrowRight } from 'components/icons/ArrowIcons';
import { ProhibitIcon, RedProhibitIcon } from 'components/icons/ProhibitIcon';

export const getColumnsSellers = (
  setBannedBuyerId: React.Dispatch<React.SetStateAction<number>>
) => {
  const columns: Column<Seller>[] = [
    {
      id: 'chooseSeller',
      Header: <Checkbox />,
      Cell: () => <Checkbox />,
      disableSortBy: true,
    },
    {
      Header: 'userName',
      accessor: (row) => row.id,
      disableSortBy: true,
      Cell: ({ row }: CellProps<Seller>) => {
        const seller = row.original;

        return (
          <UserNameCell
            userName={seller?.userName}
            email={seller?.email}
            avatar={seller?.avatar}
          />
        );
      },
    },
    {
      Header: 'signupDate',
      accessor: (row) => row.signUpDate,
    },
    {
      Header: 'purchases',
      accessor: (row) => (
        <div>
          ${row.purchases} <br /> (${row.salesAmount})
        </div>
      ),
    },
    {
      id: 'reject',
      Header: <></>,
      accessor: (row) => row.isBanned,
      Cell: ({ row }: CellProps<Seller>) => {
        const seller = row.original;

        return (
          <button
            onClick={() => setBannedBuyerId(seller.id)}
            disabled={seller.isBanned}
          >
            {seller.isBanned ? <RedProhibitIcon /> : <ProhibitIcon />}
          </button>
        );
      },
      disableSortBy: true,
    },
    {
      id: 'openSeller',
      Header: <></>,
      accessor: (row) => row.id,
      Cell: ({ value }: { value: number }) => (
        <a href={`buyers/${value}`}>
          <ArrowRight />
        </a>
      ),
      disableSortBy: true,
    },
  ];

  return columns;
};
