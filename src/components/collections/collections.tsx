import { CollectionProducts } from '@/components/collection-products/collection-products';
import { SortingSelect } from './ui/sorting-select';
import { getCollections } from '@/services';

export const Collections = async () => {
  const collections = await getCollections();

  return (
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
  );
};
