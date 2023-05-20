import { FC } from 'react';

type ProductBreadcrumbsProps = {
  collectionName: string;
  categoryName: string;
};

export const ProductBreadcrumbs: FC<ProductBreadcrumbsProps> = ({
  collectionName,
  categoryName,
}) => {
  return (
    <div className="flex flex-nowrap gap-4 text-xs">
      <p>{collectionName}</p>
      <span>—</span>
      <p>{categoryName}</p>
    </div>
  );
};
