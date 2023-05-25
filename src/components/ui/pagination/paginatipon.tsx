import { FC } from 'react';
import { usePagination } from '@mantine/hooks';
import clsx from 'clsx';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const FIRST_PAGE_NUM = 1;

type PaginationProps = {
  total: number;
  current: number;
  onChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  total,
  current,
  onChange,
}) => {
  const pagination = usePagination({
    total,
    page: current,
    onChange,
  });

  return (
    <ul className="flex place-content-center gap-3">
      <li>
        <button
          className={clsx(
            'flex h-8 w-8 items-center justify-center rounded border text-2xl font-bold',
            {
              'bg-disabled text-gray-100': current === FIRST_PAGE_NUM,
              'text-gray-400': current !== FIRST_PAGE_NUM,
            }
          )}
          onClick={() => pagination.first()}
        >
          <BiChevronLeft />
        </button>
      </li>
      {pagination.range.map((page, index) => (
        <li key={index}>
          {page !== 'dots' ? (
            <button
              className={clsx(
                'flex h-8 w-8 items-center justify-center rounded border',
                {
                  'border-violet-500 font-bold': page === current,
                }
              )}
              onClick={() => pagination.setPage(page)}
            >
              {page}
            </button>
          ) : (
            '...'
          )}
        </li>
      ))}
      <li>
        <button
          className={clsx(
            'flex h-8 w-8 items-center justify-center rounded border text-2xl font-bold',
            {
              'bg-disabled text-gray-100': current === pagination.range.length,
              'text-gray-400': current !== pagination.range.length,
            }
          )}
          onClick={() => pagination.last()}
        >
          <BiChevronRight />
        </button>
      </li>
    </ul>
  );
};
