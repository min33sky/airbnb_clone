import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
import { getCardsData, getNearbyLocation } from '@/lib/api';
import { queryKeys } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import { dehydrate, useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  const { data: exploreData } = useQuery(
    [queryKeys.exploreNearBy],
    () => getNearbyLocation(),
    {
      retry: false,
    },
  );

  const { data: cardsData } = useQuery(
    [queryKeys.liveAnywhere],
    () => getCardsData(),
    {
      retry: false,
    },
  );

  return (
    <div>
      <Head>
        <title>Airbnb Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, idx) => (
              <SmallCard key={idx} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="-m-3 flex snap-x snap-mandatory space-x-3 overflow-x-scroll p-3 scrollbar-thin scrollbar-thumb-rose-300">
            {cardsData?.map((item, idx) => (
              <MediumCard key={idx} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.exploreNearBy], () =>
    getNearbyLocation(),
  );

  await queryClient.prefetchQuery([queryKeys.liveAnywhere], () =>
    getCardsData(),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
