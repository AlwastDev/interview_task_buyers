import { FC, ReactNode } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  Column,
  useRowSelect,
} from 'react-table';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { useQueryString } from 'utils/hooks/useQueryString';

import { SecondaryButton } from 'ui/components/Button';
import { FilterArrowsIcon } from 'components/icons/FilterIcon';
import {
  ArrowLeft,
  ArrowRight,
  LongArrowBottomIcon,
  LongArrowTopIcon,
} from 'components/icons/ArrowIcons';

import s from './Table.module.scss';

interface TableProps {
  data: any[];
  columns: Column<any>[];
  translateFn: (itemForTranslate: string | ReactNode) => string | ReactNode;
  wrapperClassName?: string;
  className?: string;
}

export const Table: FC<TableProps> = ({
  data,
  columns,
  translateFn,
  wrapperClassName,
  className,
}) => {
  const t = useTranslations('Table');
  const { setQueryString } = useQueryString();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get('page');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageOptions,
    pageCount,
    setPageSize,
    rows,
    state,
    prepareRow,
    selectedFlatRows,
    toggleAllRowsSelected,
    isAllRowsSelected,
  } = useTable(
    {
      columns: columns,
      data,
      initialState: {
        pageIndex:
          queryPage && +queryPage && !isNaN(parseFloat(queryPage))
            ? parseInt(queryPage) - 1
            : 0,
      },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  const { pageIndex, pageSize } = state;
  const currentPage = pageIndex + 1;
  const endItemIndex = Math.min(currentPage * pageSize, rows.length);
  const numPagesToShow = 1; // з кожної сторони + 1 кнопка

  const setQueryPage = (page: number) => {
    setQueryString('page', page);
  };

  const toogleRowsSelected = () => {
    if (isAllRowsSelected) {
      toggleAllRowsSelected(false);
    }
  };

  const handleClickNextPage = () => {
    toogleRowsSelected();
    nextPage();
    setQueryPage(currentPage + 1);
  };

  const handleClickPreviosPage = () => {
    toogleRowsSelected();
    previousPage();
    setQueryPage(currentPage - 1);
  };

  const handleClickPage = (page: number) => {
    toogleRowsSelected();
    gotoPage(page);
    setQueryPage(page + 1);
  };

  if (queryPage && parseInt(queryPage) > pageCount) {
    return (
      <div className={s.table_nopage}>
        <div>
          <span className={s.table_nopage_title}>{t('no_page')}</span>
          <p className={s.table_nopage_subtitle}>{t('no_page_subtitle')}</p>
          <SecondaryButton
            className={s.table_nopage_button}
            onClick={() => handleClickPage(0)}
          >
            {t('to_first')}
          </SecondaryButton>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${s.table_wrapper} ${
        wrapperClassName ? wrapperClassName : ''
      }`.trim()}
    >
      <table
        className={`${s.table} ${className ? className : ''}`.trim()}
        {...getTableProps()}
      >
        <thead className={s.table_head}>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                >
                  {column.canSort ? (
                    <div className={s.table_filter}>
                      {typeof column.render('Header') === 'object'
                        ? column.render('Header')
                        : translateFn(column.render('Header'))}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <LongArrowTopIcon />
                        ) : (
                          <LongArrowBottomIcon />
                        )
                      ) : (
                        <FilterArrowsIcon />
                      )}
                    </div>
                  ) : (
                    <>
                      {typeof column.render('Header') === 'string'
                        ? translateFn(column.render('Header'))
                        : column.render('Header')}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={s.table_body} {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length > pageSize && (
        <div className={s.pagination}>
          <span className={s.pagination_size}>
            {endItemIndex} {t('of')} {rows.length}
          </span>
          <ul className={s.pagination_controls}>
            <li>
              <SecondaryButton
                className={`${s.pagination_control} ${
                  !canPreviousPage ? s.disabled : ''
                }`}
                onClick={handleClickPreviosPage}
              >
                <ArrowLeft />
              </SecondaryButton>
            </li>
            {Array.from({ length: pageCount }, (_, index) => {
              if (
                index === 0 || // Перша сторінка
                index === pageIndex || // Поточна сторінка
                index === pageCount - 1 || // Остання сторінка
                (index >= pageIndex - numPagesToShow &&
                  index <= pageIndex + numPagesToShow) || // доступні кнопки з numPagesToShow
                (pageIndex === 0 && index <= numPagesToShow) || // плюс numPagesToShow від першої сторінки
                (pageIndex === pageCount - 1 &&
                  index >= pageCount - numPagesToShow - 1) // мінус numPagesToShow від останньої сторінки
              ) {
                return (
                  <li key={index}>
                    <SecondaryButton
                      className={`${s.pagination_control} ${
                        currentPage === index + 1 ? s.active : ''
                      }`}
                      onClick={() => {
                        handleClickPage(index);
                      }}
                    >
                      <span className="text_accent">{index + 1}</span>
                    </SecondaryButton>
                  </li>
                );
              } else if (
                index === pageIndex - numPagesToShow - 1 ||
                index === pageIndex + numPagesToShow + 1
              ) {
                return (
                  <li key={index}>
                    <span className="text_accent">...</span>
                  </li>
                );
              }
            })}
            <li>
              <SecondaryButton
                className={`${s.pagination_control} ${
                  !canNextPage ? s.disabled : ''
                }`}
                onClick={handleClickNextPage}
              >
                <ArrowRight />
              </SecondaryButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
