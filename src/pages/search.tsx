import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';
import { format } from 'date-fns';
import korean from 'date-fns/locale/ko';
import getQueryClient from '@/lib/queryClient';
import { queryKeys } from '@/lib/constants';
import { getSearchResult } from '@/lib/api';
import { dehydrate, useQuery } from '@tanstack/react-query';
import InfoCard from '@/components/InfoCard';
import Map from '../components/Map';

export default function SearchPage() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const { data: searchResult } = useQuery([queryKeys.searchResult], () =>
    getSearchResult(),
  );

  const formattedStartDate = format(
    new Date(startDate as string),
    'yy년 MM월 dd일',
    { locale: korean },
  );

  const formattedEndDate = format(
    new Date(endDate as string),
    'yy년 MM월 dd일',
    {
      locale: korean,
    },
  );

  const formattedRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${formattedRange} | ${noOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {formattedRange} - for {noOfGuests} guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult?.map((item, idx) => (
              <InfoCard key={idx} {...item} />
            ))}
          </div>
        </section>

        <section className="hidden lg:inline-flex lg:min-w-[600px]">
          <Map searchResults={searchResult} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.searchResult], () =>
    getSearchResult(),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
