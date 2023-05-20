'use client';

import { FC } from 'react';
import { Accordion, Tabs } from '@/components';

export const ProductInfo: FC = () => {
  const descriptionText = `Jacket made of a loose fit makes the product a universal element of the upper layer. 
    Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.`;
  const sizeText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, esse?`;
  const detailsText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates quisquam architecto perferendis, tenetur nam dolorum. 
  Fuga qui magnam consequatur!`;
  const deliveryText = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam commodi
  quas nemo provident, tenetur asperiores ipsa iusto blanditiis
  assumenda, a rerum suscipit, magni quae illo perspiciatis ratione
  atque quia aperiam.`;

  return (
    <>
      <div className="small:hidden">
        <Tabs defaultValue="description">
          <Tabs.List>
            <Tabs.Button value="description">Description</Tabs.Button>
            <Tabs.Button value="size">Size</Tabs.Button>
            <Tabs.Button value="details">Details</Tabs.Button>
            <Tabs.Button value="deliveryAndReturns">
              Delivery&Returns
            </Tabs.Button>
          </Tabs.List>
          <Tabs.Content value="description">{descriptionText}</Tabs.Content>
          <Tabs.Content value="size">{sizeText}</Tabs.Content>
          <Tabs.Content value="details">{detailsText}</Tabs.Content>
          <Tabs.Content value="deliveryAndReturns">{deliveryText}</Tabs.Content>
        </Tabs>
      </div>
      <div className="hidden small:block">
        <Accordion defaultValue="description">
          <Accordion.Item value="description">
            <Accordion.Button>Description</Accordion.Button>
            <Accordion.Content>{descriptionText}</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="size">
            <Accordion.Button>Size</Accordion.Button>
            <Accordion.Content>{descriptionText}</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="details">
            <Accordion.Button>Details</Accordion.Button>
            <Accordion.Content>{descriptionText}</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="deliveryAndReturns">
            <Accordion.Button>Delivery&Returns</Accordion.Button>
            <Accordion.Content>{descriptionText}</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
