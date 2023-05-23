import { Container } from '@/components/container/container';
import { ProductCardFull } from '@/components/product-card-full/product-card-full';
import { getProduct } from '@/services';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function Product({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <Container>
      <h1 className="sr-only">Product page {product.name}</h1>
      <ProductCardFull product={product} />;
    </Container>
  );
}
