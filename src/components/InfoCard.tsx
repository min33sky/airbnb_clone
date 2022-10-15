import { SearchResult } from '@/lib/api';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

interface InfoCard extends SearchResult {}

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: InfoCard) {
  return (
    <article className="flex cursor-pointer flex-col border-b py-7 px-2 pr-4 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg sm:flex-row">
      <div className="relative aspect-video w-full flex-shrink-0 self-center  sm:w-52 md:w-80">
        <Image src={img} layout="fill" className="rounded-xl" alt="img" />
      </div>

      <div className="mt-4 flex flex-grow flex-col sm:mt-0 sm:pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="w-10 border-b pt-2"></div>

        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
