import { fetchProduct } from '@/api';
import { Container, ProductCardFull } from '@/components';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function Product({ params: { id } }: ProductPageProps) {
  const product = await fetchProduct(id);

  return (
    <Container>
      <h1 className="sr-only">Product page {product.name}</h1>
      <ProductCardFull product={product} />;
    </Container>
  );
}
