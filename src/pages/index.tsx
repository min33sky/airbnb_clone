import SmallCard from '@/components/SmallCard';
import { getNearbyLocation } from '@/lib/api';
import { queryKeys } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import { dehydrate, useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  const { data: exploreData } = useQuery([queryKeys.exploreNearBy], () =>
    getNearbyLocation(),
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
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.exploreNearBy], () =>
    getNearbyLocation(),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
