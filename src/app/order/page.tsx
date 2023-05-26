import { Container } from '@/components/container/container';
import { ProductOrderList } from '@/components/product-order-list/product-order-list';
import { ProductOrderSummary } from '@/components/product-order-summary/product-order-summary';
import { PromocodeForm } from '@/components/promocode-form/promocode-form';
import { OrderForm } from '@/components/order-form/order-form';
import { OrderContextProvider } from './context/order-context';
import { QueryProvider } from '@/components/query-provider/query-provider';

export default function Order() {
  return (
    <QueryProvider>
      <OrderContextProvider>
        <Container>
          <section
            className="
          grid grid-cols-2 gap-8 
          medium:grid-cols-1"
          >
            <div
              className="
            order-1 grid grid-cols-[163px,2fr] grid-rows-[auto,auto,1fr] gap-4
            medium:order-none"
            >
              <div className="col-span-2 mb-12">
                <ProductOrderList />
              </div>
              <div
                className="
              col-start-2 
              medium:col-span-2 medium:col-start-auto"
              >
                <ProductOrderSummary />
              </div>
              <div
                className="
              col-start-2 self-start 
              medium:col-span-2 medium:col-start-auto"
              >
                <PromocodeForm />
              </div>
            </div>
            <div className="mb-4">
              <OrderForm />
            </div>
          </section>
        </Container>
      </OrderContextProvider>
    </QueryProvider>
  );
}
