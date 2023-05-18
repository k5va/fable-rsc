import { CollectionProducts, Container } from '@/components';
import { fetchCollections } from '@/api';
import { SortingSelect } from './ui/sorting-select';
import React from 'react';

export const Collections = async () => {
  const collections = await fetchCollections();

  return (
    <Container>
      <section className="relative mb-20">
        <h2 className="sr-only">Fable store collections</h2>
        <div className="relative top-24 flex justify-end small:top-20">
          <SortingSelect />
        </div>
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <CollectionProducts collection={collection} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
